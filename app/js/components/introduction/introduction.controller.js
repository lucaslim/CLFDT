'use strict';

module.exports = function (contentService) {
  var self = this;
  contentService
   .get('introduction')
   .then(function (result) {
     var content = result.introduction;
     self.heading = content.heading;
     self.subheading = content.subheading;
   });
};
