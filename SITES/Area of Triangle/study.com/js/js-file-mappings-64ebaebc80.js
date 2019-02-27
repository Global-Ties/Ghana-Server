(function () {
	'use strict';
	
	var mappings = {
			"404": "8548b25c72",
	"academy/collegeAccelerator/contact-support-coaching.controller": "d646a69d4b",
	"academy/collegeAccelerator/upgradeSurvey": "d23b630b4a",
	"academy/course/NextLessonForCourseController": "98c198f07c",
	"academy/course/SuperCourseProgressController": "f3286cf46e",
	"academy/custom/CustomCourseService": "8a41c47360",
	"academy/custom/custom-course-dropdown-trigger.directive": "c45a7b6381",
	"academy/custom/customCourse": "02afbc59fe",
	"academy/directory/byType/directoryByType": "276e350c26",
	"academy/flashcards/FlashcardsController": "d9f6122772",
	"academy/flashcards/flashcards": "ededbc9f90",
	"academy/fsaPopup/fsa-popup.controller": "2d6ae4bcef",
	"academy/knowledgeCheck/KnowledgeCheckExamController": "8911ee10d6",
	"academy/knowledgeCheck/KnowledgeCheckService": "96719c8ddd",
	"academy/knowledgeCheck/knowledgeCheckExam": "44839f4491",
	"academy/knowledgeCheck/placementTest": "edfc717f5f",
	"academy/knowledgeCheck/progressPieChart": "9d096d954d",
	"academy/lesson/belowVideoTools": "43dd76f7a2",
	"academy/lesson/video-speed.controller": "bca1f556d5",
	"academy/marketing/ExampleKnowledgeGraph": "7e46eb06ff",
	"academy/marketing/aboutKnowledgeChecks": "fea807c451",
	"academy/marketing/cxHub": "b14f2bf559",
	"academy/marketing/exampleKnowledgeGraphData": "4648a09cca",
	"academy/topic/topic.app": "9bcf3cc19d",
	"academy/university-solutions/admissions-landing-page": "53169a21b3",
	"ajaxForm": "e3e3e26b6f",
	"angular/inputs/input-with-copy-button.directive": "5a5023197c",
	"angular/modal/study-modal.directive": "1a1de17a46",
	"angular/modal/study-modal.service": "e6276bcdb1",
	"angular/util/academy-asset.service": "bddd05514d",
	"angular/util/angularExceptionLogger": "8a48e208f0",
	"angular/util/directives/displayUrlHref": "e4a45edc94",
	"angular/util/directives/stud-editable-field.directive": "4a3d598273",
	"angular/util/http-post-params-as-form.provider": "a9bb3ba6f3",
	"angular/util/sdyApplyMatchMedia": "239f336f23",
	"angular/util/storage": "2357a0b0c9",
	"angular/util/template-file-mappings": "613b5a3808",
	"authentication/google-login.service": "bbb0374ca6",
	"authentication/google-member-link-notifier": "e5eeb86f2c",
	"authentication/login.app": "36db5459b7",
	"bootstrapJs/bootstrap-tabcollapse": "fac88fdacb",
	"bootstrapJs/bootstrap-tabpaths": "2b50824354",
	"classroom/assignment-display.directives": "c2ea8532cb",
	"classroom/assignment.service": "8a8d9a1b85",
	"classroom/classroom-code-join.app": "6e87e3f54d",
	"classroom/classroom-code-join.controller": "30a1007677",
	"classroom/classroom-roster.service": "e5f1be7540",
	"classroom/classroom.service": "0c2964d68e",
	"classroom/manage/create-classroom-form.directive": "253a173d03",
	"classroom/share/assignment-preview.directive": "99ea8bc3db",
	"classroom/share/classroom-share.controller": "e10c428627",
	"classroom/share/google/google-classroom-assignment.service": "2acbdc35a1",
	"classroom/share/google/google-classroom-share.directive": "ea5644a1d2",
	"classroom/share/google/google-classroom-share.service": "8e66429ccd",
	"classroom/share/share-assignment-modal.controller": "1dec021e4b",
	"classroom/share/share-assignment.app": "30491bb266",
	"classroom/share/share-assignment.controller": "b1d0d7d618",
	"classroom/share/study-classroom-share.directive": "199d5d4bdb",
	"classroom/student-invite.directive": "c905223158",
	"classroom/student-invite.service": "77560427c5",
	"classroom/student-name.directive": "a17e64f7f7",
	"classroom/student/student-assignment-list.controller": "20752f3087",
	"classroom/student/student-classroom-list.controller": "16f5e73676",
	"classroom/teacher/assignments/create/assignment-creation-inline.directive": "a3aaa03bb2",
	"classroom/teacher/assignments/create/assignment-creation-link.directive": "9774e0110c",
	"classroom/teacher/assignments/create/assignment-creation-modal.controller": "f878fcebc7",
	"classroom/teacher/assignments/create/assignment-creation-modal.service": "9fc69bcfc2",
	"classroom/teacher/assignments/create/teacher-assign.controller": "4c681a6a48",
	"classroom/teacher/classroom-invite-modal.controller": "8b495bb946",
	"classroom/teacher/classroom-picker.directive": "389304fedb",
	"classroom/teacher/classroom/classroom-modal.controller": "6feede9f23",
	"classroom/teacher/classroom/classroom-modal.service": "5fc330aade",
	"classroom/teacher/classroom/google-classroom-import-modal.controller": "5e4cddcbeb",
	"classroom/teacher/classroom/google-classroom.service": "738e8723df",
	"classroom/teacher/classroom/google-no-classrooms-cta.directive": "cc35892686",
	"classroom/teacher/classroom/student-password-reset-modal.controller": "5d613370b1",
	"classroom/teacher/customCourse/custom-course.controller": "536feed6c4",
	"classroom/teacher/customCourse/custom-course.service": "dfceb5025f",
	"classroom/teacher/customCourse/custom-courses-list.controller": "8670b55ff1",
	"classroom/teacher/customCourse/custom-courses-modal.service": "98c259aa4b",
	"classroom/teacher/customCourse/custom-topic.controller": "56d27038e3",
	"classroom/teacher/teacher-classroom-upgrade.controller": "e32fb692a7",
	"classroom/teacher/teacherEdition/teacher-edition-modal-button.directive": "10be9926c9",
	"classroom/teacher/teacherEdition/teacher-edition-sidebar.controller": "65e430f37d",
	"classroom/teacher/teacherEdition/teacher-edition-toggle.controller": "80ffa3ad36",
	"classroom/teacher/teacherEdition/teacher-edition.service": "7b8538c161",
	"compatibility/html5shiv": "0ce8f35589",
	"compatibility/objectKeysShiv": "2677d1a16c",
	"compatibility/polyfill-catalog/array.prototype.map/Array.prototype.map": "catalog/array",
	"compatibility/polyfill-catalog/array.prototype.map/index": "catalog/array",
	"compatibility/polyfill-catalog/array.prototype.map/polyfill": "catalog/array",
	"compatibility/polyfills": "31dbe5dfc0",
	"compatibility/promise-polyfill": "54349f7513",
	"compatibility/respond.matchmedia.addListener-1.4.2.min": "87c090d540",
	"compatibility/respond.min": "afc1984a3d",
	"content/concept-directory-node.app": "a0986d54c8",
	"content/concept-directory-node.controller": "9f1f234483",
	"content/concept-directory.app": "2cd4356ecf",
	"contentMarketingEPA": "7c73240780",
	"contentflow": "2e46babf64",
	"corporate/corporatePartners": "7c26b666a0",
	"corporate/corporateTab": "382b901c69",
	"corporate/template": "cb60d716ce",
	"corporate/templateV2": "a850880044",
	"corporate/zoho/zoho-form.controller": "47e7adea8f",
	"course-grade-breakdown/course-grade-breakdown.directive": "2e05cb02bd",
	"courseProgress/coursePlanCertificate": "2ebcefa27b",
	"courseProgress/courseProgressModule": "83cc4b724d",
	"courseProgress/courseProgressService": "9c04906357",
	"courseProgress/cumulative/confetti-explosion.directive": "4dc6ca5e94",
	"courseProgress/excanvas": "c1bb7af6a3",
	"courseProgress/generalCourseProgress": "f50420c073",
	"courseProgress/generalCourseProgressController": "8f531ea505",
	"customAdInfoTooltip": "011f8ddaa4",
	"dashboard/account/account-type.directive": "48b990e8e5",
	"dashboard/admin/group-report-dashboard.controller": "f1b03e407a",
	"dashboard/admin/license-report-dashboard.controller": "6b15e1582b",
	"dashboard/askexpert/ask-expert-dashboard.module": "505d4230b2",
	"dashboard/askexpert/ask-expert.service": "6f6c557a84",
	"dashboard/askexpert/ask-the-expert-dashboard.directive": "899402a13e",
	"dashboard/askexpert/essay-review-dashboard.module": "58f8463c7d",
	"dashboard/certificate/certificate-for-course.service": "016e524f43",
	"dashboard/classroom/gradebook-assignment.directive": "4b1e735208",
	"dashboard/classroom/student-assignment-dashboard-widget.directive": "d39aeadd0e",
	"dashboard/classroom/student-assignment-list.module": "6410a8464d",
	"dashboard/classroom/student-assignment.directive": "fcaff0e6fa",
	"dashboard/classroom/teacher-assignment-dashboard-widget.directive": "c5b3b9c9c3",
	"dashboard/classroom/teacher-assignment.directive": "924a2aca29",
	"dashboard/classroom/teacher/classroom-teacher.module": "d15071930f",
	"dashboard/courses/course-progress-dashboard.module": "33b63c5f91",
	"dashboard/courses/course-progress.controller": "9025f70299",
	"dashboard/courses/course-progress.service": "43a1393587",
	"dashboard/dashboard.app": "9114ae9611",
	"dashboard/dashboard.module": "87cf64a735",
	"dashboard/enrollment/enrolled-courses-panel.directive": "ddcd26bf86",
	"dashboard/enrollment/enrolled-courses.module": "11c11d372b",
	"dashboard/exam/exam-results-dashboard-main.directive": "28ebdc8902",
	"dashboard/goals/GoalsOverviewController": "3a71463cd7",
	"dashboard/goals/goals-dashboard.module": "104ab9312d",
	"dashboard/goals/goals-progress-list-item.directive": "b26a48e153",
	"dashboard/institution/course-catalog.service": "334d168e23",
	"dashboard/institution/course-competencies-module.directive": "70127c38a7",
	"dashboard/institution/start-a-course-from-catalog.directive": "2d4bc2f80f",
	"dashboard/main/main-tab-dashboard.module": "6bb608941c",
	"dashboard/membership/membership-dashboard.controller": "0a1d6d825b",
	"dashboard/notes/highlight-notes.module": "adb2c553d5",
	"dashboard/profile/profile-dashboard.controller": "79d4b227e4",
	"dashboard/promo/app-promo.controller": "261bf6473e",
	"dashboard/promo/app-promo.directive": "b7e63d20b7",
	"dashboard/promo/promo-carousel.directive": "18fd09d2fb",
	"dashboard/promo/user-onboard.directive": "d695c7766a",
	"dashboard/recentActivity/recent-activity-dashboard-module.directive": "ba859f8ac6",
	"dashboard/recentActivity/recent-activity-dashboard-tab.module": "4461d4fedd",
	"dashboard/recentActivity/recent-activity.controller": "c629cd781e",
	"dashboard/recentActivity/recent-activity.service": "523ce8e079",
	"dashboard/recommendation/recommendation-dashboard-module.directive": "d6c2d76433",
	"dashboard/recommendation/recommendation-dashboard-tab.module": "b68455c479",
	"dashboard/recommendation/recommendation-dashboard.service": "f3a1f66ab7",
	"dashboard/recommendation/recommendation.controller": "b9caa2af22",
	"dashboard/switchuser/switch-user-dashboard.controller": "d289ceba71",
	"dashboard/transcript/transcript-request-overlay.directive": "797c1b0ddc",
	"directives/RemFormDirectives": "65b5810a5b",
	"directives/arrowKeyInput": "39127ecffc",
	"directives/dashboardDirectives": "7ddeacf7ef",
	"directives/dial-gauge.directive": "71c9a4f51d",
	"directives/error-messages": "81e2d04424",
	"directives/remilonPageNumbers": "1aa62a2c57",
	"directives/remilonTreeBoxes": "f13de27108",
	"directives/sortableTable": "bffa1f0c06",
	"directives/studyFormDirectives": "e69e2805ff",
	"earnCredit": "e86abb44b2",
	"enroll/enroll-success-overlay.directive": "9ebfd5d60c",
	"enrollment/competencies.directive": "3359ec0cb1",
	"enrollment/enrolled-course-list-item.directive": "e55311b4ed",
	"enrollment/enrolled-courses.controller": "0de9581edc",
	"enrollment/enrolled-courses.directive": "06ca4a5d06",
	"enrollment/enrolled-courses.service": "24cb853808",
	"enrollment/recommended-courses.controller": "cf1225d221",
	"enrollment/recommended-courses.directive": "6b7a23b002",
	"enrollment/recommended-courses.service": "95487d0220",
	"errorPage": "9a00a70634",
	"essay-review/essay-review-list.controller": "3baef0f7f2",
	"essay-review/essay-review.controller": "f5f09cdd12",
	"exam/practice-exam-logged-out.controller": "1f56e2892f",
	"exam/practice-exam-results-feedback.directive": "9d1d5be3c0",
	"exam/practice-exam-timer.directive": "0661d2f77d",
	"exam/practice-test-dropdown.directive": "ed6c731f3d",
	"exams/practice-exam-results.module": "cc7efcf4a6",
	"excanvas.min": "304cb5e244",
	"feedback/feedback-inline.directive": "1f26be3d44",
	"feedback/feedback-standalone.app": "ae7e8db0ce",
	"feedback/feedback.service": "931ab5383a",
	"feedback/testimonial-list.controller": "719f00a3bd",
	"forum/forum-recent-discussions.directive": "bcef3b7411",
	"global/announcements.directive": "aefbe1960e",
	"global/global-events.app": "3083a915e8",
	"global/locked-feature-modal-uib.controller": "8da99c45e2",
	"global/locked-feature-modal.controller": "4640990607",
	"google/google-parse-tags-config": "7d1a73ee71",
	"handlebars/handlebars-v2.0.0": "664baaa4ba",
	"instantanswers/instant-answers-subject-picker.directive": "1f021dc83e",
	"interactiveWidgets/pagination": "9b07b0bc84",
	"jqueryPlugins/smooth-scroll-init": "69f7d700ac",
	"js-file-mappings": "48c4453bdf",
	"leadforms/nonClientThanks": "3556888f28",
	"leadforms/thankYou": "d78ecf0dc0",
	"logging/error": "1ab5f274a2",
	"logging/eventLogging": "2ff5cc726b",
	"logging/eventLoggingInit": "4ad215fce0",
	"logging/rejoiner": "52fbb70a6c",
	"logging/studyOrgAffiliate": "07529854b7",
	"logging/tpix": "6eb7265ebc",
	"logging/trck": "40c79101ff",
	"logging/visible/track-visible.directive": "6d2d49b3c4",
	"logging/visible/visibility-tester": "b015a41c00",
	"logging/visible/visibility-tester.service": "8b988224fb",
	"member/authentication/feature-check.service": "376f95000b",
	"member/billing/add-new-credit-card.controller": "a8b84d8d04",
	"member/billing/current-membership.directive": "1c26a98165",
	"member/billing/pause-account.app": "4ed01cac0b",
	"member/billing/pause-account.directive": "5fb55fbdea",
	"member/billing/pause-account.service": "4c75dba069",
	"member/billing/payment-info.service": "889db80c29",
	"member/billing/teacher-license-expiration-popup.controller": "ed336d0524",
	"member/info/member-info.service": "cfefa3264d",
	"member/info/persona.directive": "1a7a9b7df7",
	"member/member": "d3b255d447",
	"member/profile/profile.service": "8cdb63968f",
	"members-EP": "e10f4e5718",
	"members": "cf5b2c5c51",
	"membership/account-type": "42bc34aa51",
	"membership/billing-account-details.directive": "43811d500d",
	"membership/billing-history.app": "7ea71ccfb6",
	"membership/billing-history.controller": "21535b2171",
	"membership/billing-history.service": "6876f69815",
	"membership/cancel-membership.app": "fc38ebf20d",
	"membership/cancel-membership.controller": "5c4fa7b6d8",
	"membership/multi-month-modal.controller": "6385869a40",
	"membership/multi-month-onboarding.app": "3733759128",
	"membership/multi-month-onboarding.controller": "de88e0fb30",
	"membership/past-due-banner.directive": "8cd46df1c9",
	"membership/resume-membership.app": "67ff096970",
	"membership/resume-membership.controller": "2b712bba34",
	"mobile-promotion/appDownloadBar": "931ee2e9f2",
	"monitoring/monitoring-dependencies-table.directive": "960337c249",
	"monitoring/monitoring-dependencies.app": "48b577852d",
	"monitoring/monitoring-dependencies.service": "147d2986e6",
	"nodeInfo": "53a8821b9a",
	"notification/remilonNotification": "0d42fd7590",
	"pagination": "8b727c9dcf",
	"participationScore/course-participation-snapshot.service": "eb266c4471",
	"polyfill": "ddf04d1d4b",
	"ppc-directory/ppc-directory.app": "a1852e0cd2",
	"ppc-directory/ppc-directory.controller": "9f3c8a7d5e",
	"ppcTestPrep/ppc-test-prep-directory.module": "b049240cff",
	"print/lesson-print.controller": "76811bda77",
	"print/print.app": "0c891fc0ae",
	"proctor/exam-readiness-form.directive": "62eea95467",
	"proctor/examChecklist": "3d90097278",
	"proctor/proctor": "d267055e65",
	"proctor/proctorExamDecorator": "2b2ee986a3",
	"proctor/proctoredExamFeedback": "2679b1dd7b",
	"proctor/purchase-additional-proctored-exam.directive": "6c22b1c33c",
	"proctor/purchaseAdditionalProctoredExam": "c1a9a4907f",
	"product/switch-to-teacher.app": "af1c726449",
	"product/switch-to-teacher.controller": "a9d4d62e64",
	"quiz/quiz-print.app": "aeeecfb9cb",
	"quiz/quiz-print.controller": "bbf93a26ca",
	"quiz/quiz.service": "9e3607795a",
	"quizGame/player-quiz-game.app": "4702a626f7",
	"quizGame/player-quiz-game.module": "0f2762eb3b",
	"quizGame/quiz-game.service": "4742fd2653",
	"quizGame/teacher-quiz-game.module": "d92e9bffa3",
	"redesign/CTAs/articleFloatingBar": "5b11d2e59e",
	"redesign/CTAs/articleFloatingElement": "0483245ae6",
	"redesign/CTAs/floatingBar": "4257e9eda2",
	"redesign/CTAs/floatingBarResearch": "2756ae8d33",
	"redesign/CTAs/formCarousel": "9bdaed7c1a",
	"redesign/CTAs/returnAbandon": "a5af680fcb",
	"redesign/CTAs/returnVisitor": "e241fbb782",
	"redesign/CTAs/surveyWindow": "aa7d8ad08f",
	"redesign/CTAs/userGoal": "49ec619e68",
	"redesign/OnboardingApp": "ee66431671",
	"redesign/aboutAdrian": "eea8d8ef0e",
	"redesign/about_us_map": "474fb4a65c",
	"redesign/ajaxForm-EP": "6f541c8be0",
	"redesign/blogNewsletterSignup": "0b93f15778",
	"redesign/changeEmail": "300c73e58c",
	"redesign/changePhoneNumber": "12e2c2a76a",
	"redesign/changeUsername": "a1dbf1d51e",
	"redesign/cm/contentMarketing": "5ae580a919",
	"redesign/collectReview": "2e3ea4df3c",
	"redesign/course/Course": "3e998dca4f",
	"redesign/courseIndex": "dda396d9b4",
	"redesign/courseInfo": "81d37e9831",
	"redesign/courseNavigator": "39edbdaa82",
	"redesign/ctaBarEmail": "774fb356f6",
	"redesign/dashboard/controllers/ActivityController": "5b7e369fa6",
	"redesign/dashboard/controllers/AskTheExpertController": "fa6b2a69f1",
	"redesign/dashboard/controllers/GettingStartedSimpleController": "9718f30faf",
	"redesign/dashboard/controllers/HighlightNotesTabController": "fbefc56ba8",
	"redesign/dashboard/controllers/InstitutionReportController": "cd3a9953d3",
	"redesign/dashboard/controllers/LicenseReportController": "ca0aae1bf9",
	"redesign/dashboard/controllers/OnboardingController": "5f1929b172",
	"redesign/dashboard/controllers/instant-answers-single-question.controller": "83fa885a9b",
	"redesign/dashboard/dashboard-mobile-nav": "7528170472",
	"redesign/dashboard/dashboardCourseProgress": "c34792a15d",
	"redesign/dashboard/dashboardUi": "c0f87c647d",
	"redesign/dashboard/lib/searchBox": "dd8ff0b858",
	"redesign/dashboard/lib/util": "ff106acc27",
	"redesign/dashboard/modules/Exam": "e94dff112c",
	"redesign/dashboard/modules/GettingStarted": "9119b3ff1b",
	"redesign/dashboard/modules/SwitchUser": "4be39467f0",
	"redesign/dashboard/modules/instant-answers-editor.directive": "e9b1c7b781",
	"redesign/dashboard/services/StudyTrainerService": "97b37fe316",
	"redesign/dashboard/services/TeacherShareService": "9b0e85d40e",
	"redesign/defaultGlobalUserApp": "be738db5dd",
	"redesign/directives/FadeOutIn": "c3ae55bb56",
	"redesign/directives/word-cloud.directive": "758690494f",
	"redesign/directory": "c27ca4c2b1",
	"redesign/directory/courseFilterWidget": "e9be7c4357",
	"redesign/dropDownSearch": "bb3fe60e96",
	"redesign/exam/exam-answer.directive": "74d0599cc1",
	"redesign/exam/full-length-exam-modal.controller": "c4826e7716",
	"redesign/exam/full-length-exam.app": "5e9d558868",
	"redesign/exam/full-length-exam.controller": "b0d465a826",
	"redesign/exam/full-length-exam.service": "d41922ce76",
	"redesign/exam/practiceExam": "a40471f000",
	"redesign/favoriting": "19e6bd9cb7",
	"redesign/global": "67d29a3c5c",
	"redesign/globalModules": "cbaf6e32e5",
	"redesign/homepage/homepage": "bcbdeb9724",
	"redesign/hotjarTriggers": "83d3a0ce1e",
	"redesign/howItWorks": "7b1d74ed39",
	"redesign/hub/hubAudience": "812624eddd",
	"redesign/hub/hubAudienceArticle": "fe380417ce",
	"redesign/instantanswers/activate-membership": "392f23c663",
	"redesign/instantanswers/instant-answers-activate-or-buy-credits-modal.controller": "0c7a133dad",
	"redesign/instantanswers/instant-answers-buy-more-answers": "ef99b397a9",
	"redesign/instantanswers/instant-answers-modal-trigger.controller": "e436e4896a",
	"redesign/instructorMain": "eb8f914310",
	"redesign/lesson/controllers/LessonPostRollController": "16eb58a3ed",
	"redesign/lesson/highlight-note.service": "d3cfb3a0ea",
	"redesign/lesson/highlightNotes": "1d908824d1",
	"redesign/lesson/instantAnswersPopUp": "3f6eaac95c",
	"redesign/lesson/lesson": "01c62fe254",
	"redesign/lesson/linkBoldTermsToSearch": "34734efd90",
	"redesign/lesson/quiz/QuizController": "57b4f1fd61",
	"redesign/lesson/quiz/QuizTracking": "e33155dfff",
	"redesign/lesson/quiz/lessonQuiz": "497c9b49da",
	"redesign/lesson/quiz/quiz": "1985695560",
	"redesign/lesson/transcript-click-handler": "75f66d3642",
	"redesign/loadDeferredCss": "687496d6c4",
	"redesign/marketing/device-with-features": "7bdc9765c9",
	"redesign/marketing/mobileAppLandingPage": "c357358495",
	"redesign/marketing/mobileAppLandingPage/checkboxOptions": "dc70d96c96",
	"redesign/marketing/studyMonster": "6404e907fe",
	"redesign/onboarding/OnboardingChooseCourseController": "95c532651f",
	"redesign/partial-reg-form-modal.controller": "65f5be2e9a",
	"redesign/ppc/ppcAcademyArticle": "8b764d42ee",
	"redesign/proctoredExams/ProctoredExamReviewModuleController": "aebbec0ac2",
	"redesign/proctoredExams/ProctoredExamService": "3051239187",
	"redesign/proctoredExams/proctoredDashboardModule": "eb1e4274b3",
	"redesign/product": "eb00b84995",
	"redesign/productPage": "051625248d",
	"redesign/qualarooTriggers": "0afb1a2aeb",
	"redesign/readMoreContent": "d5e357c52a",
	"redesign/recommendations/RecommendationController": "179db3ba49",
	"redesign/recommendations/RecommendationService": "239be10400",
	"redesign/recommendations/addibleLesson": "8970bc7346",
	"redesign/recommendations/recommendationApp": "dd558371f4",
	"redesign/referFriend": "d251b991af",
	"redesign/registration/PpcRegistrationApp": "e37a5ea28b",
	"redesign/registration/RegistrationFormController": "9f2173b14a",
	"redesign/registration/RegistrationService": "18fe5174db",
	"redesign/relatedContentTabs": "569b6f44c4",
	"redesign/research/ajaxFormSubmissionModal": "1ca1db7323",
	"redesign/research/articleMain": "8c28279f5a",
	"redesign/research/articleVideo": "14222166ef",
	"redesign/research/companyDynamicPage": "94efb691c5",
	"redesign/research/compliance": "242b5ca0d4",
	"redesign/research/intlzip": "0d8f08f52c",
	"redesign/research/leadformPage": "aa4cbf357a",
	"redesign/research/research": "c1f5929229",
	"redesign/research/researchProduct": "325e5b0597",
	"redesign/research/studMobile": "457f939099",
	"redesign/research/updateHashFunctions": "cbdeab13ef",
	"redesign/research/videoHook": "19d841b3f8",
	"redesign/research/wageChartRender": "40eb9d0401",
	"redesign/sbp/sbp": "789bb8500f",
	"redesign/setDirectoryTestingCookie": "c01bfc2d43",
	"redesign/setUserTestingCookie": "ec7c6bf7bd",
	"redesign/splitTabContent": "011130cbe5",
	"redesign/stickyModule": "d30fa677b5",
	"redesign/studyAnswer/StudyAnswersIndex": "ec6e84babe",
	"redesign/studyAnswer/allStudyAnswers": "9fb1b7c6b0",
	"redesign/studyAnswer/studyAnswer": "afd7abc982",
	"redesign/temp/pagination": "8b727c9dcf",
	"redesign/textWrapImages": "c9c393a2a3",
	"registration/angularFormConstants": "2435cb957c",
	"registration/angularFormDirectives": "08a44dd5fd",
	"registration/applyCoupon": "18c3828bf4",
	"registration/billingTooltips": "8f7f9591d8",
	"registration/compact-reg-form/compact-reg-form.app": "1fc68776bd",
	"registration/compact-reg-form/compact-reg-form.controller": "0511cd6817",
	"registration/editable-reg-modal/editable-reg-modal.controller": "d8d50911c4",
	"registration/exit-modal.controller": "0ac016c6d2",
	"registration/exit-modal.service": "88076e4509",
	"registration/homeschool-promo.app": "f88af1c885",
	"registration/license-code-signup.app": "b6ea723811",
	"registration/license-code-signup.controller": "a956112db4",
	"registration/license/add-license-to-account.controller": "f67e341eeb",
	"registration/license/boomerangRegistration": "4115ee8a61",
	"registration/license/license-code-input.directive": "58aa01d270",
	"registration/manage-membership/manage-membership.app": "5d1b18ac7f",
	"registration/manage-membership/manage-membership.controller": "b1d815b1b6",
	"registration/partial-reg-form/preselect-reg-form-answers.service": "cdeae8fbca",
	"registration/post-registration/post-reg-teacher-upgrade.controller": "b1927a868e",
	"registration/post-registration/post-registration-survey.app": "dac9f81540",
	"registration/privacyIframes": "8120fb70da",
	"registration/reg-form/reg-form-modal.controller": "e49aefdc09",
	"registration/reg-form/reg-form.controller": "20653532d2",
	"registration/reg-form/reg-form.service": "7c6637676a",
	"registration/registration-form-settings.provider": "acb7e71683",
	"registration/registration-form-util.service": "4fa27d9fc8",
	"registration/registrationForm": "b2c54658a4",
	"registration/selectFirstInput": "d6589f2e25",
	"registration/subscriberSignup": "275d5a93e0",
	"registration/subscription.service": "67f7826bc3",
	"registration/teacherGroupInfoRequest": "86567c9170",
	"registration/updateBilling": "7b15740297",
	"registration/upgradeSubscription": "a50c5c5d9a",
	"remspect/remspect.directive": "e353eadd7d",
	"remtest/sschain": "5d00b84003",
	"research/clientSupport/contact-support-boomerang.controller": "d4c6b1b89e",
	"research/hubs/research-hubs.page": "14426bdf1a",
	"research/lead-form/dynamic-lead-question-evaluator.model": "4966fdcc41",
	"research/lead-form/dynamic-lead-questions.controller": "b8b789dd67",
	"research/lead-form/dynamic-lead-questions.page": "4b99d9a897",
	"research/lead-form/dynamic-lead-questions.service": "387aa7acab",
	"research/multiselect/SchoolSearchModule": "07eb55bff5",
	"research/multiselect/multiselectSchoolSearch": "a55c2f49ff",
	"research/partners/landingPage": "ce02d102d3",
	"research/pre-match-form/no-pre-matches": "4553c0d790",
	"research/pre-match-form/pre-match-form": "623e2e287b",
	"research/pre-match-form/pre-match-search": "d0c2e1ab7f",
	"research/qualifier/programLinksPrequalifier": "0e12ad94dd",
	"research/refineSearch/locationFilters": "aa5056ca54",
	"research/refineSearch/oneQuestionAtAtime": "165a68bfb8",
	"research/refineSearch/submitCombinedRefineForms": "faf10f2ca3",
	"school/school-credit-search.app": "2d9152c47e",
	"school/school-credit-search.controller": "55ee8dfde8",
	"school/school-credit-search.service": "52f8155649",
	"search/select-search.directive": "8377e75002",
	"search/text-search.service": "651073bf11",
	"sitesearch/site-search.app": "1509a5a806",
	"sitesearch/site-search.controller": "7196639fd5",
	"ssSimplifiedSearch": "f96f8ad0a9",
	"ssSubjectArea": "fa3862eeb0",
	"stripeKey": "c4f64f31f1",
	"stripeKeyTest": "90e8218830",
	"student-homepage/student-product.app": "ab6a1f743c",
	"student-homepage/student-product.controller": "cf9e2bb1cb",
	"studyGoals/study-goal-controls.directive": "0873abf3f0",
	"studyGoals/study-goals.service": "fe4bbed709",
	"support/freshdeskStandalone": "ac404be085",
	"support/report-an-error.directive": "fdf24fd779",
	"support/report-an-error.service": "50cf668950",
	"survey/survey.app": "cfbd6dd490",
	"survey/survey.controller": "17b3278b40",
	"survey/survey.service": "9146d58f4f",
	"teacher-hubs/teacher-asset-directory.app": "afd7f762f8",
	"teacher-hubs/teacher-asset-directory.controller": "a264dd65a8",
	"teacher-hubs/teacher-info-hub.app": "dd0cd4e4d9",
	"teacher-hubs/teacher-info-hub.controller": "3d6992fc43",
	"teacher-hubs/teacher-professional-development.app": "2f1ea450a5",
	"teacher-hubs/teacher-professional-development.module": "e5a56b2592",
	"teacherLandingPage/teacher-landing-page-search.controller": "5bfc5911ae",
	"teacherLandingPage/teacher-landing-page.app": "0c16ff6619",
	"teacherLandingPage/teacher-ppc-directory.app": "7e404a4af4",
	"teacherLandingPage/teacher-ppc-directory.module": "09a0c27704",
	"testPrep/teacher-certification-hub.module": "cddb5feabb",
	"testPrep/test-prep-hub.module": "51710a77e5",
	"tesuEarnCredit": "4f67c9f75a",
	"tutorial/dashboard/dashboard-tutorial.directive": "3c7bd20d7c",
	"tutorial/tutorial-item": "88ee7ef876",
	"tutorial/tutorial.directive": "aeb4a0e69c",
	"tutorial/tutorial.service": "8f94b5c0a7",
	"util/animate-on-scroll": "2c29601bf3",
	"util/bubbleField": "4df5accfe7",
	"util/circular-progress.directive": "4f9c7729f9",
	"util/cookieManipulator": "40a42daddb",
	"util/copy-values.service": "807d41d192",
	"util/data-viz.app": "a5ed32f73e",
	"util/data-viz": "0a2825f2a0",
	"util/debug-tools": "6b26dd0b96",
	"util/defaultErroredImages": "70fd65a1b9",
	"util/dropdown.directive": "927e903246",
	"util/go-to-tab-and-highlight.directive": "d205d556a9",
	"util/highlightElementOnClick": "70d692dcf4",
	"util/javaFormEncode": "619fa7b899",
	"util/moment-local-data/locale-data.en": "6c088aa253",
	"util/pluralize.directive": "b9377a7f1d",
	"util/qualaroo": "c1733ea4c8",
	"util/qualarooResearch": "5e2a039eb3",
	"util/remspect": "29b97357aa",
	"util/scroll-on-click.directive": "313489fb91",
	"util/scrolling-sidebar.directive": "3c0e6420df",
	"util/simpleJqueryForm": "77f488a2e7",
	"util/smoothJazzScroll": "4404bd70cd",
	"util/study-graph": "0c81f16a13",
	"util/support-article-link.directive": "69dfa0051b",
	"util/target-viewport.directive": "b6468a999c",
	"util/text-input.directive": "3ffe9d8fec",
	"util/to-the-top": "425e39d660",
	"util/typed-map": "75c5c0a63a",
	"util/user-rating.directive": "a0d16df3a8",
	"util/value-pro": "ab282737ad",
	"util/value-wrapper": "5e48335491",
	"util/virtualOnClick": "71ece30b0f",
	"util/window-location.service": "3e14362ae0",
	"video/initEmbeds": "2181ecf00c",
	"video/remVideo": "0889bdafe5",
	"video/study-hls-video.controller": "7ed225fe99",
	"video/study-video.directive": "2edca8a4ad",
	"video/teacherNotes/teacher-notes-plugin": "b38e898dc4",
	"video/teacherNotes/teacher-notes-plugin.service": "76737f31c6",
	"video/video-cta-overlay.service": "dbef6bba17",
	"video/video-lesson-tracking.service": "de7d2231b3",
	"workingScholars/enterprise-page": "9cb7964fc1",
	"workingScholars/government-page": "45618d6737",

	};
	
	if (!window.studyJsMappings) {
		window.studyJsMappings = mappings;
	}
	
})();