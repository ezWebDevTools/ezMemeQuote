/**
 * Note: Please scroll to the bottom for more details. The top has been reserved for notes and such.
 *
 * <br> = return
 * <br><br> = paragraph break
 *
 */
 
var ezMQ = {
  "ezobj":[
      {
	  'index'		: 4,
	  'title'		: 'Getting Started',
      'idea_size'	: 100,	  
	  'idea'		: 'In the repo\'s demo folder there\'s a subfolder called checklist. That list will walk you through all the basics.<br><br>Again, the intention here is KISS. Something consistent and branded without the overhead of Photoshop, etc.<br><br>The setup doesn require some know how, after that it\'s closer to editing a text file.',
	  'quotes'		: false,
	  'select'		: 'Getting started',
	  'who'			: 'ezMemeQuote',
	  'note'		: '',
	  'caption' 	: setupCaption,
    },
    {
	  'index'		: 3,
	  'title'		: '',
      'idea_size'	: 100,	  
	  'idea'		: 'No Title.<br><br>No quotes.<br><br>No Who.<br><br>No Note.<br><br>No Caption.',
	  'quotes'		: false,
	  'select'		: 'No. No. No. No. No.',
	  'who'			: '',
	  'note'		: '',
	  'caption' 	: '',
    },
    {
	  'index'		: 2,
	  'title'		: 'ezMemeQuote',
	  'idea_size'	: 100,
	  'idea'		: 'An Uber Easy Starter Template for Text-based Meme-esque Content Creation.<br><br>Text-based meme template, with a make it brand-centric twist. Some light CSS knowledge required.',
	  'quotes'		: true,
	  'select'		: 'About',
	  'who'			: 'Development: ezWebDevTools',
	  'note'		: 'Product Manager: NxT LvL MrktnG',
	  'caption'		: setupCaption
    },
    {
	  'index'		: 1,
	  'title'		: '', 
	  'idea'		: '<img src="img/cover.jpg">',
	  'quotes'		: false,
	  'select'		: 'Demo Cover Page',
	  'who'			: '',
	  'note'		: '',
	  'caption'		: setupCaption
    }
  ]}
  

  
/**
 *
 * * * * * * * IMPORTANT  * * * * * * * 
 * * * Order is oldest on the bottom, newest on top. 
 * * * This is done so adding a new "page" doesn't require scrolling. Instead just stack it on top.
 *
 *
 * {
 *  'index'			: 1,   				// strictly for internal use. Makes it easier to find a page after the fact. 
 *  'title'			: '', 				// title
 *  'idea'			: '',  				// the main idea, aka the quote
 *	'idea_size'		: 100,				// you can change the font-size of the idea using this. Greater than 100 is larger, smaller than 100 will make the default smaller.
 *  'quotes'		: true, 			// use quotation marks? default value: true. '', false or no 'quote' property will all result in quotes not being applied to the 'idea'
 *  'select'		: '',				// *Short* description to appear in the select that lists the pages
 *  'who'			: '',				// 'who' (or what) said it. basically the first line under / after the quote
 *  'note'			: '',				// 'note' on where, when, why, etc. they said it. and the line under 'who' is some further details is required. 
 *  'caption'		: setupCaption		// setupCaption is the caption defined in js/setup.js, else override it here.
 * },
 *
 */