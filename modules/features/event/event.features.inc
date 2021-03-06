<?php
/**
 * @file
 * event.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function event_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function event_node_info() {
  $items = array(
    'event' => array(
      'name' => t('event'),
      'base' => 'node_content',
      'description' => t('Creating events'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
