

Template.slick.onRendered(function(){
	let slickInit = false;
	this.autorun(()=>{
		// reinit, if data contexst has been changed
		let data = Template.currentData(); 
		let slickOptions = null;
		if(data && data.slickOptions) {
			slickOptions = data.slickOptions;
		}
		Meteor.defer(()=>{

			if(slickInit) {
				this.$('.slick').slick("unslick");
			}
			this.$('.slick').slick(slickOptions);
			slickInit = true;
		});
		
		
	});

});