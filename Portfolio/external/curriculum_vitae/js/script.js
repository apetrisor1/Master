
// JOB INFO for EXPERIENCE text carousel

jobs = [{
    title: 'Driver',
	employer: 'SC Donuteria SRL',
	period: '',
	description: 'Delivered consumables and stocks to store-fronts and festival booths'
		},
		{
	title: 'Data entry with Dutch',
	employer: 'Iron Mountain Romania, Cluj Napoca',
	period: 'Oct 2017 - Feb 2018',
	description: 'Categorized HR documents for a well-known Dutch supermarket franchise. Project-based, fixed duration of four months.'
		},
		{
	title: 'Researcher with Dutch',
	employer: 'SC CCSCC. SRL, Cluj Napoca',
	period: 'Aug 2015 - Oct 2017',
	description: 'Monitored governmental, law enforcement and mass-media sources of news from the Netherlands and the former Netherlands '+
				 'Antilles countries. Created profiles for politically exposed persons from information available online. Created complex '+
				 'profiles for state-owned companies.'
		},
		{
	title: 'Audit internship',
	employer: 'KPMG Romania SRL, Cluj Napoca',
	period: 'Nov 2014 - Mar 2015',
	description: 'Processed balance sheets and other financial records, performed relevant tests in Excel '+ 
				 'on these records. Took part in stock-counts to vouch for the correct recording of stocks. Proposed adjustments '+
				 'where stocks were inappropriately recorded.'
		},
		{
    title: 'Supply chain internship',
	employer: 'MM Barcoding Ltd., St. Helens, Merseyside, U.K.',
	period: 'Nov 2013 - Mar 2014',
	description: 'Purchased barcode printers, consumables and other parts from suppliers across Europe, then repackaged and sent '+
				 'the products to end users or resellers.'
		},
		];



// Start
$(domLoaded)
function domLoaded(){

	// Shows table chosen by user
	function showTable(keyword){
		$(`.${keyword}-button`).click(function(){
			$('table').css('display','none');
			$(`.${keyword}-table`).css('display','block');
		})
	}
	
	$('.contact-button').click(showTable('contact'));
	$('.work-button').click(showTable('work'));
	$('.education-button').click(showTable('education'));
	// $('.contact-button').click(showTable('contact'));






	// Keeps track of which job is shown to user 
	// 0 - most recent job by default, first in "jobs" array
	// will have to be hardcoded in HTML to keep table filled out, otherwise it collapses
	var jobTracker = 0;


	// Populates EXPERIENCE part of CV with other jobs by scrolling through them
	$('.left').click(function(){
		if(jobTracker !== 0){
			jobTracker --;
			$('.job_title').html(jobs[jobTracker].title);
			$('.job_employer').html(jobs[jobTracker].employer);
			$('.job_period').html(jobs[jobTracker].period);
			$('.job_description').html(jobs[jobTracker].description);
		}
	})
	$('.right').click(function(){
		if(jobTracker !== 4){
			jobTracker ++;
			$('.job_title').html(jobs[jobTracker].title);
			$('.job_employer').html(jobs[jobTracker].employer);
			$('.job_period').html(jobs[jobTracker].period);
			$('.job_description').html(jobs[jobTracker].description);
		}
	})




}