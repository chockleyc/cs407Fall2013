$(document).ready(function() {

    function doc(){}
        doc.navBar = $('#navBar');
        doc.sectionContainer = $('#section-container');
        doc.sectionChild = $('.jx-sect-cont');
        doc.HOVER = "HOVERING";
        doc.timer = undefined;
        doc.killTimer = function(){
            clearTimeout( doc.timer );
        }

        doc.section = function(){}
            doc.section.THIS      = undefined;
            doc.section.ID        = undefined; // ul, ur, ll, lr
            doc.section.openDelay = 900;
            doc.section.DFLTCLR   = '#777777';
            doc.section.colorID   = undefined; // $.attr(id) === ( blue || yellow || ... );
            doc.section.curColor  = '#777777'; // #777777 is default color for navBar

        doc.section.setCurrent = function($THIS){
            doc.section.THIS = $THIS;
        }

        doc.section.start = function($THIS){

            doc.section.THIS    = $THIS;
            doc.section.colorID = $THIS.attr('data-color');
            doc.section.ID      = $THIS.attr('id');

            doc.section.preOpenHoverState();
            doc.section.startHoverIntent();

        }

        doc.section.setSectionsInactive = function(){
            doc.sectionContainer.children('.jx-sect-cont').each(function(i){
                if( ! $(this).hasClass( doc.section.ID ) ){
                    $(this).addClass('inactive');
                }
                else{
                    $(this).addClass('active');
                    }
            });
        }
        
        doc.section.setNavigateInactive = function(){
            doc.navBar.children('.nav-box').each(function(i){
                if( ! $(this).hasClass( 'nav-'+doc.section.ID ) ){
                    $(this).addClass('inactive');
                }
                else{
                    $(this).addClass('active');
                    }
            });
        }
        
        doc.section.preOpenHoverState = function(){
            doc.section.setSectionsInactive();
            doc.section.setNavigateInactive();
            doc.section.insetNavColor();
        }

        doc.section.setNavBarToColor = function($hexNum){
            doc.navBar.css('background-color', $hexNum);
        }

        doc.section.insetNavColor = function(){
            switch( doc.section.colorID ){
            case 'blue':
                doc.section.setNavBarToColor('#44525b');
                break;
            case 'yellow':
                doc.section.setNavBarToColor('#979565');
                break;
            case 'green':
                doc.section.setNavBarToColor('#57785c');
                break;
            case 'red':
                doc.section.setNavBarToColor('#9d534a');
                break;
            }
        }

        doc.section.startHoverIntent = function(){
            doc.timer = setTimeout(function() {
                doc.section.THIS.css("z-index", 20);
                doc.section.insetNavColor();
                doc.section.THIS.transition({ height:'615px', width:'615px', top:'0px', left:'0px', delay:150 });
            }, doc.section.openDelay);
        
        }

        doc.section.unsetNavColor = function(){
            doc.navBar.css('background-color', doc.section.DFLTCLR);
        }

        doc.section.stopHoverIntent = function(){
            switch( doc.section.ID ){
            case 'ul':
                doc.section.THIS.transition({ height:'300px', width:'300px', top:'0px', left:'0px', delay:150 });
                break;
            case 'ur':
                doc.section.THIS.transition({ height:'300px', width:'300px', top:'0px', left:'315px', delay:150 });
                break;
            case 'll':
                doc.section.THIS.transition({ height:'300px', width:'300px', top:'300px', left:'0px', delay:150 });
                break;
            case 'lr':
                doc.section.THIS.transition({ height:'300px', width:'300px', top:'300px', left:'315px', delay:150 });
                break;
            }
        }
        
        doc.section.resetInactiveSections = function(){
            doc.sectionContainer.children('.jx-sect-cont').each(function(i){
                if( $(this).hasClass('inactive') ){
                    $(this).removeClass('inactive');
                }
                else{
                    $(this).removeClass('active');
                }
            });
        }
        
        doc.section.resetInactiveNavigate = function(){
            doc.navBar.children('.nav-box').each(function(i){
                if( ! $(this).hasClass( "nav-"+doc.section.ID ) ){
                    $(this).removeClass('inactive');
                }
                else{
                    $(this).removeClass('active');
                    }
            });
        }
        
        doc.section.quit = function(){
            doc.killTimer();
            doc.section.THIS.css("z-index", 10);
            doc.section.unsetNavColor();
            doc.section.curColor = doc.section.DFLTCLR;
            
            doc.section.resetInactiveNavigate();
            doc.section.resetInactiveSections();
            doc.section.stopHoverIntent();
        }

    doc.sectionChild.hover(
        function(){
            doc.section.start( $(this) );
            
        },
        function(){
            doc.section.quit();
        }
    );
    

    
});
