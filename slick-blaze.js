

Template.slick.onRendered(function(){
	let slickInit = false;
	this.autorun(()=>{
		// reinit, if data contexst has been changed
		Template.currentData(); // establishes a dependency

		Meteor.defer(()=>{

			if(slickInit) {
				this.$('.slick').slick("unslick");
			}
			this.$('.slick').slick({
				dots: true,
				arrows: true
			});
			slickInit = true;
		});
		
		
	});

});