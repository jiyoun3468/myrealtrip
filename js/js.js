  $(function(){
    $(".i_search").click(function(){
      $(".s_allbox").stop().animate({
        top: '100px'
      },500)
    })
  
    $(".search_close").click(function(){
      $(".s_allbox").stop().animate({
        top: '-400px'
      },500)
    })
  
  
    $(".bar").click(function(){
      $(".drop_menu").stop().animate({
        top:'0'
      },500)
    })
    
    $(".search_close_b").click(function(){
      $(".drop_menu").stop().animate({
        top:'-100%'
      },500)
    })
    $(".drop_menu .li").click(function(){
      let subMenu = $(this).siblings(".sub");
      let toggle = $(this).find("span");
  
      if (subMenu.css("display") === "none") {
          // 모든 sub 메뉴 숨기기 및 span 텍스트 초기화
          $(".drop_menu .sub").css("display", "none");
          $(".drop_menu .li span").text("+");
          $(".drop_menu .li").css("color", ""); // li 색상 초기화
          $(".drop_menu .li span").css("color", ""); // span 색상 초기화
  
          // 클릭된 메뉴만 표시하고 span 텍스트 변경 및 색상 변경
          subMenu.css("display", "block");
          toggle.text("-");
          $(this).css("color", "#438CCB"); // li 색상 변경
          toggle.css("color", "#438CCB"); // span 색상 변경
      } else {
          // 클릭된 메뉴 숨기기 및 span 텍스트 초기화 및 색상 복원
          subMenu.css("display", "none");
          toggle.text("+");
          $(this).css("color", ""); // li 색상 초기화
          toggle.css("color", ""); // span 색상 초기화
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
  

  AOS.init();
    ////
  })
  
