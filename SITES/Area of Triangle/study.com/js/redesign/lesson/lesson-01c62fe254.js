(function() {
	
	'use strict';
	var angularModules = [
		"assignment-creation-inline.directive",
		"assignment-creation-link.directive",
		"courseProgress",
		"customCourse",
		"custom-course-dropdown-trigger.directive",
		"feedback-inline.directive",
		"globalModules",
		"google-classroom-share.directive",
		"go-to-tab-and-highlight.directive",
		"highlightNotes",
		"instantAnswersPopUp",
		"locked-feature-modal.controller",
		"reportAnErrorOverlay",
		"testimonial-list.controller",
		"tutorial",
		"ui.utils",
		"video-lesson-tracking.service",
	];
	
	var injectedRequireDeps = [
		//Injected dependencies
		'jquery',
		'angularDependency',
		'util/remspect',
		'redesign/courseInfo',
		'redesign/courseNavigator',
		'authentication/google-member-link-notifier',
		'redesign/textWrapImages',
		'redesign/lesson/controllers/LessonPostRollController',
		'redesign/lesson/transcript-click-handler'
	];
	
	var otherRequireDeps = [
		//Angular dependencies
		'courseProgress/courseProgressModule',
		'lib/angular/ui-utils',
		'redesign/globalModules',
		
		//Other dependencies
		'academy/custom/customCourse',
		'academy/custom/custom-course-dropdown-trigger.directive',
		'academy/lesson/belowVideoTools',
		'bootstrapJs/bootstrap-tabpaths',
		'bootstrapJs/bootstrap-tabcollapse',
		"classroom/share/google/google-classroom-share.directive",
		"classroom/teacher/assignments/create/assignment-creation-inline.directive",
		"classroom/teacher/assignments/create/assignment-creation-link.directive",
		"dashboard/askexpert/ask-expert.service",
		"feedback/feedback-inline.directive",
		"feedback/testimonial-list.controller",
		"global/locked-feature-modal-uib.controller",
		'lib/jquery/bootstrap/jasny',
		'lib/jquery-unveil/study.unveil',
		"lib/toastr",
	   'logging/rejoiner',
		"mobile-promotion/appDownloadBar",
		'redesign/collectReview',
		"redesign/favoriting",
		'redesign/lesson/highlightNotes',
		'redesign/lesson/instantAnswersPopUp',
		"redesign/relatedContentTabs",
		'support/report-an-error.directive',
		'tutorial/tutorial.directive',
		"util/virtualOnClick",
		"util/go-to-tab-and-highlight.directive",
		'video/video-lesson-tracking.service',
	];
	
	function addAngularDep(requireModule, angularModule) {
		angularModules.push(angularModule);
		otherRequireDeps.push(requireModule)
	}
	
	/**
	 * @param {function(...) : jQuery} $
	 * @param angular
	 * @param {Remspect} remspect
	 * @param {function(...,new:CourseInfo)} CourseInfo
	 * @param {function(...,new:CourseNavigator)} CourseNavigator
	 * @param {function(...,new:TextWrapImages)} TextWrapImages
	 * @param {function(...,new:LessonPostRollController)} LessonPostRollController
	 * @returns {*}
	 */
	function init($, angular, remspect, CourseInfo, CourseNavigator, GoogleMemberLinkNotifierModule, TextWrapImages, LessonPostRollController,
	 TranscriptClickHandler) {
		
		
		if (!remspect.isControl("postRollTiled")) {
			var upNextLessonRecommendation = angular.module("LessonPostRollController", []);
			angularModules.push("LessonPostRollController");
			upNextLessonRecommendation.controller("LessonPostRollController", LessonPostRollController);
		}
		
		if (!remspect.isControl("userReviews")) {
			angularModules.push("collectReview");
		}
		
		if (document.querySelector("#hasCodeExamples") != null) {
			require(["lib/code-prettify"], function(CodePrettify) {
				$(document).ready(function() {
					CodePrettify.prettyPrint();
				});
			})
		}
		
		var app = angular.module("lesson", angularModules);
		
		LessonController["$inject"] = ["$injector", "$scope", "videoLessonTrackingService"];
		
		/**
		 * @constructor
		 */
		function LessonController($injector, $scope, videoLessonTrackingService) {
			// find video element
			var videoElement = $('.videoContainer').find('div[data-wistiaid]');
			var wistiaId = videoElement.attr('data-wistiaid');
			var academyAssetId = $("#academyAssetId").val();
			
			this.lessonAcademyAssetId = academyAssetId;
			this.nextLessonAcademyAssetId = $("#nextLessonAcademyAssetId").val();

			this.searchResults = [];
			this.$scope = $scope;
			
			if (wistiaId) {
				videoLessonTrackingService.trackVideoPlays(wistiaId, academyAssetId);
			}
			
			$scope.$watch('lessonCtl.searchText', function (newValue, oldValue) {
				this.search(newValue);
			}.bind(this));
			
			//Instantiate service so that it does its thing
			if ($injector.has("TeacherVideoOverlayService")) {
				$injector.get("TeacherVideoOverlayService");
			}
			
			//Instantiate service so that it does its thing
			if ($injector.has("VideoCTAOverlayService")) {
				$injector.get("VideoCTAOverlayService");
			}
			
			if ($injector.has("ExitModalService")) {
				this.exitModalService = $injector.get("ExitModalService");
			}
		}
		
		LessonController.prototype.search = function(searchText) {
			if (remspect.isVariation("relatedContentPostRoll", "v1")) {
				if (searchText && searchText.length > 1) {
					$.ajax({
						type: 'GET',
						url: '/search/text/lessons.ajax?searchPattern=' + searchText
					}).done(function(data) {
						var cloudItems = $(".cloud-item");
						cloudItems.addClass("hidden");
						var searchResults = [];
						data.results.forEach(function(academyAsset) {
							this.addAcademyAssetToSearchResults(academyAsset, searchResults);
						}.bind(this));
						this.searchResults = searchResults;
						if (this.searchResults.length < 1) {
							cloudItems.removeClass("hidden");
							$(".postroll-relevant-lesson-row").addClass("hidden");
						}
						else {
							cloudItems.addClass("hidden");
							$(".postroll-relevant-lesson-row").removeClass("hidden");
						}
						this.$scope.$apply();
					}.bind(this));
				}
				else {
					$(".cloud-item").removeClass("hidden");
					$(".postroll-relevant-lesson-row").addClass("hidden");
				}
			}
		};
		
		LessonController.prototype.addAcademyAssetToSearchResults = function(academyAsset, searchResults) {
			if (academyAsset.academyAssetId == this.lessonAcademyAssetId || academyAsset.academyAssetId == this.nextLessonAcademyAssetId) {
				// do nothing, we want to exclude these lessons
			} else if (academyAsset.type == 'LESSON') {
				var timeString = Math.floor(academyAsset.videoDuration / 60) + ":" + ("0" + (academyAsset.videoDuration % 60)).slice(-2);
				academyAsset.typeName = 'Video (' + timeString + ')';
				searchResults.push(academyAsset);
			}
			else if (academyAsset.type == 'TEXT') {
				academyAsset.previewImageUrl = '/images/reDesign/defaultTextPreview.png';
				academyAsset.typeName = 'Text Lesson';
				searchResults.push(academyAsset);
			}
			else if (academyAsset.type == 'FLASHCARD_SET') {
				academyAsset.previewImageUrl = '/images/reDesign/flashcardsPreview.png';
				academyAsset.typeName = 'Flashcards';
				searchResults.push(academyAsset);
			}
		};
		
		app.controller("LessonController", LessonController);
		
		new TranscriptClickHandler().initialize();
		
		$(document).ready(function() {
			
			GoogleMemberLinkNotifierModule.GoogleMemberLinkNotifier.showNotificationIfAccountWasLinked();
			
			$(document.body).on("show.bs.offcanvas", function(e) {
				$("body").css("position", "fixed");
			});
			
			$(document.body).on("hidden.bs.offcanvas", function(e) {
				$("body").css("position", "relative");
			});
			
			if(!remspect.isControl("lessonCitation")){
				$('[data-copy-clipboard]').on('click',function(){
					var elToCopy = $($(this).data("copyClipboard"));
					
					/*ios*/
					var range = document.createRange();
					range.selectNodeContents(elToCopy[0]);
					var s = window.getSelection();
					s.removeAllRanges();
					s.addRange(range);
					elToCopy[0].setSelectionRange(0, 999999);
					document.execCommand('copy');
					s.removeAllRanges();
					
					/*not ios*/
					elToCopy.select();
					document.execCommand("copy");
					elToCopy.blur();
				});
			}
			
			var courseInfo = new CourseInfo($('#courseInfoTab').data('coursename'));
			var courseNavigator = new CourseNavigator($('[data-coursenavigator]'));
			var textWrapImages = new TextWrapImages($('.wikiContent'));
			
			var lastImgAlt = $('.wikiContent .imageplugin:last img').attr('alt');
			if (lastImgAlt && lastImgAlt.toLowerCase().indexOf('infographic') >= 0) {
				$('.wikiContent .imageplugin:last').addClass('full-width-img')
			}
			
			$("*[data-hide-enroll]").on("click", function() {
				var academyAssetId = this.getAttribute('data-hide-enroll');
				$.ajax({
					type: 'POST',
					url: '/member/enrollment/unenroll.ajax',
					data: {
						courseId: academyAssetId
					}
				});
				$('.doNotShow').toggleClass('hide');
			});

			var angularModules = ["lesson"];
			angularModules.push("study.mobile-promotion.download-banner");

			var scriptElement = document.querySelector("script[data-page-type]");
			var pageType = scriptElement.getAttribute("data-page-type");
			if (pageType === 'ACADEMY_ARTICLE') {
				angular.bootstrap($("body"), angularModules.concat(["courseFilter"]));
			}else{
				angular.bootstrap($("body"), angularModules);
			}
			
			$('#articlesTabCollapse').tabCollapse();
			$('#articlesTabCollapse-accordion .panel-collapse').removeClass('in');
			$('#articlesTabCollapse-accordion .panel-heading a').addClass('collapsed');
			
			$("#mini-course-progress__test-prep-carousel").carousel({
				interval: 4000,
				wrap: false,
				keyboard: false
			});
			
		});
		
		app.directive('errSrc', function() {
			return {
				link: function(scope, element, attrs) {
					element.bind('error', function() {
						if (attrs.src != attrs.errSrc) {
							attrs.$set('src', attrs.errSrc);
						}
					});
				}
			}
		});
		
		return app;
	}
	
	require(['util/remspect'], function(remspect) {
		var scriptElement = document.querySelector("script[data-page-type]");
		var pageType = scriptElement.getAttribute("data-page-type");
		var hasQualaroo = false;
		
		// Other dependencies
		if (pageType === 'ACADEMY_ARTICLE') {
			otherRequireDeps.push("redesign/directory/courseFilterWidget");
		}
		else if (pageType === 'ARTICLE' || pageType === 'PHRASE') {
			if (!remspect.isControl("qualarooArticle")) {
				otherRequireDeps.push('util/qualaroo');
				hasQualaroo = true;
			}
			otherRequireDeps.push("redesign/dropDownSearch");
		}
		
		if (!remspect.isControl("lessonQualaroo") && !hasQualaroo) {
				otherRequireDeps.push('util/qualaroo');
				hasQualaroo = true;
		}
		
		if (remspect.isVariation("lessonSurvey", "v1") && !hasQualaroo) {
			otherRequireDeps.push('util/qualaroo');
			hasQualaroo = true;
			
			window._kiq = window._kiq || [];
			
			if (window.additionalUserProperties){
				window.additionalUserProperties.testVar = "objectionHandlingVarA"
			} else {
				window.additionalUserProperties = {};
				window.additionalUserProperties.testVar = "objectionHandlingVarA"
			}
			
		} else if (remspect.isVariation("lessonSurvey", "v2") && !hasQualaroo){
			otherRequireDeps.push('util/qualaroo');
			hasQualaroo = true;
			
			window._kiq = window._kiq || [];
			
			if (window.additionalUserProperties) {
				window.additionalUserProperties.testVar = "objectionHandlingVarB"
			}
			else {
				window.additionalUserProperties = {};
				window.additionalUserProperties.testVar = "objectionHandlingVarB"
			}
		}

		if (!remspect.isControl("teacherEditionToggle")) {
			addAngularDep("classroom/teacher/teacherEdition/teacher-edition-modal-button.directive", "teacher-edition-modal-button.directive");
			addAngularDep("classroom/teacher/teacherEdition/teacher-edition.service", "teacher-edition.service");
			addAngularDep("classroom/teacher/teacherEdition/teacher-edition-sidebar.controller", "teacher-edition-sidebar.controller");
			addAngularDep("classroom/teacher/teacherEdition/teacher-edition-toggle.controller", "teacher-edition-toggle.controller");
		}

		if (!remspect.isControl("fsaUpsell")) {
			addAngularDep("academy/fsaPopup/fsa-popup.controller", "fsa-popup-toggle.controller");
		}
		
		if (remspect.isVariation("relatedContentPostRoll", "v1")) {
			addAngularDep("redesign/directives/word-cloud.directive", "word-cloud.directive");
		}

		if (remspect.isVariation("essayReview", "essayLoggedOut")){
			addAngularDep("essay-review/essay-review.controller", "essay-review.controller")
		}
		
		if (!remspect.isControl("essayReview")) {
			addAngularDep("redesign/instantanswers/instant-answers-modal-trigger.controller", "instant-answers-modal-trigger.controller")
		}
		
		if (!remspect.isControl("videoBottomThird")) {
			addAngularDep("video/video-cta-overlay.service", "video-cta-overlay.service")
		}
		
		if (document.querySelector("teacher-quiz-game-start") != null) {
			addAngularDep("quizGame/teacher-quiz-game.module", "teacher-quiz-game.module")
		}

		if (document.querySelector("study-video") != null || document.querySelector("study-video-lazy") != null) {
			addAngularDep("video/study-video.directive", "study-video.directive");
		}

		/*selector is element directive name, if it exists, chances are we have a video to show.. so go download the stuff to show a video*/
		if(!remspect.isControl("hlsjs") && document.querySelectorAll('[study-hls]').length > 0){
            addAngularDep("video/study-hls-video.controller","study-hls-video.controller");
		}
		
		if(document.querySelectorAll('.video-speed').length > 0){
			addAngularDep("academy/lesson/video-speed.controller","video-speed.controller");
		}
		
		if (!remspect.isControl("exitModal")) {
			addAngularDep("registration/exit-modal.service", "exit-modal.service");
		}
		
		addAngularDep("registration/reg-form/reg-form.service", "reg-form.service");

		require(injectedRequireDeps.concat(otherRequireDeps), init);
	});
})();


