DROP DATABASE IF EXISTS dnd_db;

CREATE DATABASE dnd_db;

USE dnd_db

CREATE TABLE IF NOT EXISTS `dnd5_classes` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_name` varchar(9) NOT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

CREATE TABLE IF NOT EXISTS `dnd5_class_spells` (
  `class_id` int(2) NOT NULL,
  `spell_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `dnd5_spells` (
  `spell_id` int(11) NOT NULL AUTO_INCREMENT,
  `spell_name` varchar(128) NOT NULL,
  `spell_level` int(2) NOT NULL,
  `spell_type` varchar(128) NOT NULL,
  `casting_time` varchar(128) NOT NULL,
  `spell_range` varchar(128) NOT NULL,
  `components` varchar(128) NOT NULL,
  `duration` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `higher_levels` text NOT NULL,
  PRIMARY KEY (`spell_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=362 ;

--Kudos to reddit user u/svenjoy_it for 
