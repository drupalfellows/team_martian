<?php
/**
 * @file
 * event2_feature.features.inc
 */

/**
 * Implements hook_node_info().
 */
function event2_feature_node_info() {
  $items = array(
    'event2' => array(
      'name' => t('Event2'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
