// Version: 1.0.2
// MIT License

function createGoogleAdsConversionTag(triggerType, triggerFilters) {
  var tagManager = TagManager.Accounts.get('123456'); // Your GTM Account ID
  var container = tagManager.containers.get('GTM-123456'); // Your GTM Container ID
  
  var triggerConfig = {
    'name': '',
    'some_custom_event_filters': triggerFilters
  };
  
  switch (triggerType) {
    case 'click':
      triggerConfig.name = 'All Clicks';
      triggerConfig.auto_event_filter = 'link click, button click';
      break;
    case 'domready':
      triggerConfig.name = 'DOM Ready';
      break;
    case 'windowload':
      triggerConfig.name = 'Window Loaded';
      break;
    case 'justlinks':
      triggerConfig.name = 'Just Links';
      triggerConfig.auto_event_filter = 'link click';
      break;
    case 'formsubmit':
      triggerConfig.name = 'Form Submission';
      break;
    case 'custom':
      triggerConfig.name = 'Custom Event';
      break;
  }
  
  var trigger = container.createTrigger(triggerType, triggerConfig);
  
  var conversionTag = container.createTag('adsconversion', {
    'name': 'Google Ads Conversion Tracking',
    'conversion_id': '***********', // Your Conversion ID
    'conversion_label': '***********r', // Your Conversion Label
    'send_to': '***********' // Your Google Ads Conversion ID and Label
  });
  
  container.createTriggerLink(conversionTag, trigger);
  
  container.save();
  Logger.log('The tag has been created.');
}
