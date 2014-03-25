$(document).ready(function() {

	var i = 0, you = 0;

	/* see if anything is previously checked and reflect that in the view*/
	$(".checklist input:checked").parent().addClass("selected");
	
	ranks = [
			['starshysoldat', 'Senior Soldat'],
			['molodshyserjant','Jüngere Sergeant'],
			['serjant','Sergeant'],
			['starshyserjant','Senior Sergeant'],
			['starshyna','Obermaat'],
			['praporshyk','Fähnrich'],
			['starshypraporshyk','Senior Fähnrich'],
			['molodshylejtynant','Jüngere Leutnant'],
			['lejtynant','Leutnant'],
			['starshylejtynant','Senior Leutnant'],
			['capitan','Kapitän'],
			['major','Major'],
			['pidpolkownyk','Oberst'],
			['polkownyk','Obersten'],
			['general_major','Generalmajor'],
			['general_lejtynant','Generalleutnant'],
			['general_polkownyk','Generaloberst'],
			['general_armyi_ukraine','Armeegeneral der Ukraine']
		];
		
	function start() {
		
		i = 0; you = 0;
		
		$('#num').text(1);
		
		$('#start').text("wählen Sie die Antwort");
		
		// Your current rank is a soldier		
		$('#shrnk').fadeOut("slow");
		$('img.rng').fadeOut("slow",function(){
			
			$(this).attr("src","img/starshysoldat.png");
		
		});
		
		// Your current rank is a soldier
		$('#shrnk').attr("src","img/starshysoldat.png");
		$('#shrnk').attr("alt","Soldat");
		$('#shrnk').attr("title","Soldat");
		$('#you').text("Soldat");
			
		_ranks = ranks.slice();
		
		questions = shuffle(_ranks);
			
		// First Questions
		$('#zwannya').attr("src","img/"+questions[i][0]+".png");
		$('#zwannya').attr("alt",questions[i][1]);
		
		answers = [ questions[0], questions[1], questions[2], questions[3] ];
		shuffle(answers);
			
		$('#choice_a').next('label').text(answers[0][1]);
		$('#choice_b').next('label').text(answers[1][1]);
		$('#choice_c').next('label').text(answers[2][1]);
		$('#choice_d').next('label').text(answers[3][1]);
		
	}
	
	start();

	/* handle the user selections */
	$(".checklist .checkbox-select").click(
		function(event) {
			event.preventDefault();
								
			$(this).parent().parent().find('li').removeClass("selected");
			$(this).parent().parent().find(":radio").attr("checked",false);
			
			$(this).parent().addClass("selected");
			$(this).parent().find(":radio").attr("checked","checked");
		}
	);
	
	$(".checklist .checkbox-deselect").click(
		function(event){
			event.preventDefault();
	
			$(this).parent().parent().find('li').removeClass("selected");
			$(this).parent().parent().find(":radio").attr("checked",false);
					
			// If the answer is ok
			if ($(this).parent().find('label').text()==$('#zwannya').attr("alt")) {
				
				if ($('#you').text()=="Soldat") {
					you=0;
				} else {
					you++;
				}
					
				$('#shrnk').fadeOut("slow");
								
				// Your current rank is a soldier
				$('#shrnk').attr("src","img/"+ranks[you][0]+".png");
				$('#shrnk').attr("alt",ranks[you][1]);
				$('#shrnk').attr("title",ranks[you][1]);
				$('#you').text(ranks[you][1]);
				
				$('.rng').attr("src","img/"+ranks[you][0]+".png");
					
				$('#shrnk').fadeIn('slow');
			}
			
			i++;
			
			if (i==ranks.length) {
				
				$('#start').html("<span style='color:red;font-weight:bold;cursor:pointer;'>PLAY AGAIN</span>");
				
				$('img.rng').fadeIn("slow");
				
				i=i-1;
				
				return false;
			}
			
			$('#zwannya').fadeOut("fast",function(){
			
				$(this).attr("src","img/"+questions[i][0]+".png");
				$(this).attr("alt",questions[i][1]);
			
				$(this).fadeIn("fast");
				
			});
				
			// forming the answers
			var new_questions_arr = questions.slice();
				new_questions_arr.splice(i,1);
				shuffle(new_questions_arr);
			
			// totaly 4th
			answers_arr = [ questions[i], new_questions_arr[0], new_questions_arr[1], new_questions_arr[2] ];
			
			shuffle(answers_arr);
			
			// Initial Answers
			$('#choice_a').next('label').text(answers_arr[0][1]);
			$('#choice_b').next('label').text(answers_arr[1][1]);
			$('#choice_c').next('label').text(answers_arr[2][1]);
			$('#choice_d').next('label').text(answers_arr[3][1]);
			
			$('#num').text((i+1));
			
		}
	);
	
	$('#start').click(function(){
	
		start();
	
	});
	
		//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

});