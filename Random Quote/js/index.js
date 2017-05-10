<!-- Inspired by  AJINKYA BALASAHEB DESHMUKH--!>

$(document).ready(function(){
        var q = '';
        var a = '';
        var quotes=[{quote:"Money buys a man's silence for a time. A bolt in the heart buys it forever.",by:"Petyr Baelish"},
            {quote:"When you play the game of thrones, you win or you die. There is no middle ground.", by:"Cersei Lannister"},
            {quote:"A lion does not concern himself with the opinion of sheep.", by:"Tywin Lannister"},
            {quote:"If you think this has a happy ending, you haven't been paying attention.", by:"Ramsay Snow"},
            {quote:"Winter is coming.", by:"Eddard Stark"},
            {quote:"A Lannister always pays his debts.", by: "Tyrion Lannister"},
            {quote:"You know nothing, Jon Snow.", by:"Ygritte"},
            {quote:"HODOR!", by:"Hodor"},
            {quote:" The night is dark and full of terrors.",by:"Melisandre"},
            {quote:"I'm simply asking you to run my kingdom while I eat, drink, and whore myself into an early grave.", by:"Robert Baratheon"},
            {quote:"By what right does the wolf judge the lion? By what right?", by:"Jamie Lannister"},
            {quote:"It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters.",by:"Oberyn Martell"},
            {quote:"Nothing isn't better or worse than anything. Nothing is just nothing.",by:"Arya Stark"},
            {quote:"Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some are given a chance to climb, they cling to the realm or the gods or love. Only the ladder is real. The climb is all there is.", by:"Petyr Baelish"},
            {quote:"Power resides where men believe it resides. It's a trick, a shadow on the wall. And a very small man can cast a very large shadow.", by:"Lord Varys"},
            {quote:"The man who passes the sentence should swing the sword.", by:"Eddard Stark"}];
            var ind  = Math.floor(Math.random()*quotes.length);
            
            q = quotes[ind].quote;
            a = quotes[ind].by;
            document.getElementById('quote').innerHTML = '"'+q+'"';
            document.getElementById('author').innerHTML = "-"+a;
            $(".backcolor" ).css("background-color","#16a085");
        $('#nqu').on("click", function() {
            var ind  = Math.floor(Math.random()*quotes.length);
            q = quotes[ind].quote;
            a = quotes[ind].by;
            document.getElementById('quote').innerHTML = '"'+q+'"';
            document.getElementById('author').innerHTML = "-"+a;
            switch(a){
               case "Petyr Baelish": $(".backcolor" ).css("background-color","#16a085");break;
               case "Cersei Lannister": $(".backcolor" ).css("background-color","#27ae60");break;
               case "Tywin Lannister": $(".backcolor" ).css("background-color","#2c3e50");break;
               case "Ramsay Snow": $(".backcolor" ).css("background-color","#f39c12");break;
               case "Eddard Stark": $(".backcolor" ).css("background-color","#e74c3c");break;
               case "Tyrion Lannister": $(".backcolor" ).css("background-color","#9b59b6");break;
               case "Ygritte": $(".backcolor" ).css("background-color","#FB6964"); break;
               case "Hodor": $(".backcolor" ).css("background-color","#342224"); break;
               case "Melisandre": $(".backcolor" ).css("background-color","#472E32"); break;
               case "Robert Baratheon": $(".backcolor" ).css("background-color","#BDBB99"); break;
               case "Jamie Lannister": $(".backcolor" ).css("background-color","#41bcd6"); break;
               case "Oberyn Martell": $(".backcolor" ).css("background-color","#35e364"); break;
               case "Arya Stark": $(".backcolor" ).css("background-color","#69f4f3"); break;
               case "Lord Varys": $(".backcolor" ).css("background-color","#c35e5e"); break;
            }
            
        });
         $('#newq').on("mouseenter", function() {
            $('#newq').css("opacity","0.9");
            
        });
         $('#newq').on("mouseleave", function() {
            $('#newq').css("opacity","1");
            
        });
        
         $('#tweet').on("mouseenter", function() {
            $('#tweet').css("opacity","0.9");
            
        });
         $('#tweet').on("mouseleave", function() {
            $('#tweet').css("opacity","1");
            
        });

        $('#tweet').on("click", function() {
            var link = 'https://twitter.com/intent/tweet?text=' +'"'+ q +'"'+ ' ' + "-"+a;
            window.open(link, 'twitter');
            
        });
           
    });