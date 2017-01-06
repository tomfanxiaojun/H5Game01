	(function() {
	    $(window).on("load", function() {
	        document.getElementById('gameMusic').play();
	    });
	    $('.game-home__bts-rule').on('click', () => {
	        $('.game-home').hide();
	        $('.game-rules').addClass('game-rules__show');
	    });
	    $('.game-rules__close').on('click', () => {
	        $('.game-home').show();
	        $('.game-rules').removeClass('game-rules__show');
	    });

	    $('.game-music__play').on('click', function(e) {
	        if ($(this).hasClass('game-music__on')) {
	            $(this).removeClass('game-music__on');
	            document.getElementById('gameMusic').pause();
	        } else {
	            $(this).addClass('game-music__on');
	            document.getElementById('gameMusic').play();
	        }
	    });

	})();
