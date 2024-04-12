/*돋보기누르면 서치박스 열고
  닫기 버튼 누르면 사라짐*/ 

  $(function(){


    $(".i_search").click(function(){
      $(".s_allbox").stop().animate({
        top: '100px'
      },1000)
    })
  
    $(".search_close").click(function(){
      $(".s_allbox").stop().animate({
        top: '-400px'
      },1000)
    })
  
  
    $(".bar").click(function(){
      $(".drop_menu").stop().animate({
        top:'0'
      },1000)
    })
    
    $(".search_close_b").click(function(){
      $(".drop_menu").stop().animate({
        top:'-100%'
      },1000)
    })
    $(".drop_menu .li").click(function(){
      let subMenu = $(this).siblings(".sub");
      
      // sub의 현재 상태 확인
      if (subMenu.css("display") === "none") {
          // 모든 sub를 숨김
          $(".drop_menu .sub").css("display", "none");
          // 현재 클릭된 span에 대응하는 sub를 표시
          subMenu.css("display", "block");
      } else {
          // 현재 클릭된 span에 대응하는 sub를 숨김
          subMenu.css("display", "none");
      }
  });
    
  
    $(".n1").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'block'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".n2").on({
      click:function(){
        
        $(".wrap2").css({display: 'block'})
        $(".asia").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
  
    $(".n3").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'block'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".n4").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'block'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".n5").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'block'})
      }
    })
  
  
  
  
    
    $(".con1").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'block'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".con2").on({
      click:function(){
        
        $(".wrap2").css({display: 'block'})
        $(".asia").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
  
    $(".con3").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'block'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".con4").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'block'})
        $(".guam").css({display: 'none'})
      }
    })
    $(".con5").on({
      click:function(){
  
        $(".wrap2").css({display: 'block'})
        $(".Southeast").css({display: 'none'})
        $(".asia").css({display: 'none'})
        $(".europe").css({display: 'none'})
        $(".canada").css({display: 'none'})
        $(".guam").css({display: 'block'})
      }
    })
  
    ////
  })
  