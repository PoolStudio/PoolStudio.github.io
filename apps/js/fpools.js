//--- fpools ---------------------------------------------------------------------------------------
$( document ).ready(function() {
  $("input[name=colorfpools]").change( function() {
    if ($("#radio1").prop("checked")) {$("#imgcolorfp").removeClass('crWhite crBlue crBrilliant crOnyx crSapphire').addClass('crWhite');}
    if ($("#radio2").prop("checked")) {$("#imgcolorfp").removeClass('crWhite crBlue crBrilliant crOnyx crSapphire').addClass('crBlue');}
    if ($("#radio3").prop("checked")) {$("#imgcolorfp").removeClass('crWhite crBlue crBrilliant crOnyx crSapphire').addClass('crBrilliant');}
    if ($("#radio4").prop("checked")) {$("#imgcolorfp").removeClass('crWhite crBlue crBrilliant crOnyx crSapphire').addClass('crOnyx');}
    if ($("#radio5").prop("checked")) {$("#imgcolorfp").removeClass('crWhite crBlue crBrilliant crOnyx crSapphire').addClass('crSapphire');}
  });

});
//End
