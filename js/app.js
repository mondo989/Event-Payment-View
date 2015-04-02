 $("#order-it").click(function() {


      $('#order-it').hide("slow");
      $('.max-img-size').hide("slow");
      $('.inline').hide("slow");
      $('.login-holder').show();
      $('#pay-now').show();
    });
    document.querySelector('.sweet-12').onclick = function() {
      swal({
        title: "Thank You for Registering",
        text: "Your order has been successfully processed.",
        type: "success",
        confirmButtonClass: 'btn-success',
        confirmButtonText: 'Success!'
      });
    };
    document.querySelector('.sweet-20').onclick = function() {
      swal({
        title: "Please try again",
        text: "We're having a problem processing your order, please try again.",
        type: "error",
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Go Back'
      });
    };



  // document.querySelector('.sweet-10').onclick = function(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this imaginary file!",
  //     type: "info",
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn-primary',
  //     confirmButtonText: 'Primary!'
  //   });
  // };

  // document.querySelector('.sweet-11').onclick = function(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this imaginary file!",
  //     type: "info",
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn-info',
  //     confirmButtonText: 'Info!'
  //   });
  // };

  // document.querySelector('.sweet-12').onclick = function(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this imaginary file!",
  //     type: "success",
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn-success',
  //     confirmButtonText: 'Success!'
  //   });
  // };

  // document.querySelector('.sweet-13').onclick = function(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this imaginary file!",
  //     type: "warning",
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn-warning',
  //     confirmButtonText: 'Warning!'
  //   });
  // };

  // document.querySelector('.sweet-14').onclick = function(){
  //   swal({
  //     title: "Are you sure?",
  //     text: "You will not be able to recover this imaginary file!",
  //     type: "error",
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn-danger',
  //     confirmButtonText: 'Danger!'
  //   });
  // };
