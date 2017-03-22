/**
 * Created by Kevin Bosman on 12/16/2016.
 */
(function () {
    angular.module('resume-module', [])
            .controller('ResumeController',
                    function ($scope, $http) {
                        ctrl = this;

                        ctrl.resumeJSON = {};

                        $http.get('src/data/resume.json')
                                .then(function (res) {
                                    ctrl.resumeJSON = res.data;
                                });

                        //basic
                        ctrl.getBasicInfo = function () {
                            return ctrl.resumeJSON["basic"];
                        };

                        //education
                        ctrl.getEducation = function () {
                            return ctrl.resumeJSON["education"];
                        };

                        //skills
                        ctrl.getSkills = function () {
                            return ctrl.resumeJSON["skills"];
                        };

                        //work
                        ctrl.getJobExperiences = function () {
                            return ctrl.resumeJSON["work"];
                        };
                    }
            )
            .component('basicInformation',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'src/components/resume/fragments/basic_info/basic-information.html'
                    })
            .component('education',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'src/components/resume/fragments/education/education.html'
                    })
            .component('skillsList',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'src/components/resume/fragments/skills/skills-list.html'
                    })
            .component('jobExperienceList',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'src/components/resume/fragments/job_experience/job-experience-list.html'
                    })
            .component('jobExperience',
                    {
                        restrict: 'E'
                        , bindings: {
                            data: '<'
                        }
                        , templateUrl: 'src/components/resume/fragments/job_experience/job-experience.html'
                    });
})();