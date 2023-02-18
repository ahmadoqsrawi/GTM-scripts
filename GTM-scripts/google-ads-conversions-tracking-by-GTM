// Version: 1.0.1

// MIT License

function createGoogleAdsConversionTag(triggerType, triggerFilters) {
    var tagManager = TagManager.Accounts.get('123456'); // Your GTM Account ID
    var container = tagManager.containers.get('GTM-123456'); // Your GTM Container ID
  
    var trigger = null;
    if (triggerType === 'click') {
      // Create a Click trigger
      trigger = container.createTrigger('click', {
        'name': 'All Clicks',
        'auto_event_filter': 'link click, button click',
        'some_custom_event_filters': triggerFilters
      });
    } else if (triggerType === 'domready') {
      // Create a DOM Ready trigger
      trigger = container.createTrigger('domready', {
        'name': 'DOM Ready',
        'some_custom_event_filters': triggerFilters
      });
    } else if (triggerType === 'windowload') {
      // Create a Window Loaded trigger
      trigger = container.createTrigger('windowload', {
        'name': 'Window Loaded',
        'some_custom_event_filters': triggerFilters
      });
    } else if (triggerType === 'justlinks') {
      // Create a Just Links trigger
      trigger = container.createTrigger('click', {
        'name': 'Just Links',
        'auto_event_filter': 'link click',
        'some_custom_event_filters': triggerFilters
      });
    } else if (triggerType === 'formsubmit') {
      // Create a Form Submission trigger
      trigger = container.createTrigger('submit', {
        'name': 'Form Submission',
        'some_custom_event_filters': triggerFilters
      });
    } else if (triggerType === 'custom') {
      // Create a Custom Event trigger
      trigger = container.createTrigger('custom', {
        'name': 'Custom Event',
        'some_custom_event_filters': triggerFilters
      });
    }
    
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
  
