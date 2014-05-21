jQuery(function($){
	var post = $('.post-body').annotator();
	var storeOptions = {
		prefix: '/store',
		loadFromSearch: {uri: $('.post-body').attr('id')},
		annotationData: {uri: $('.post-body').attr('id')}
	};
	var permissionsOptions = {user: "Hendrik"};
	post.annotator('addPlugin', 'Store', storeOptions);
	post.annotator('addPlugin', 'Permissions', permissionsOptions);
	post.annotator('addPlugin', 'Tags');
	post.annotator('addPlugin', 'Filter', {filters: [
	    {
	      label: 'Quote',
	      property: 'quote'
	    },	    {
	      label: 'User',
	      property: 'user'
	    }
  	]});
  	post.annotator('addPlugin', 'Markdown');
});
