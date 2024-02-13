//--- Вывод таблицы для прайса ---------------------------------------------------------------------------------------
function crPrice() {
  if (price == 'price') {
    numpp = 0;
    tablePrice = '<table id="tprice">';
    for (i = 0; i < prcode.length - 1; i++) {
      if (prcurrency[i] == 'title') {
        tablePrice += '<caption>' + prname[i] + '<\/caption>';
        continue;
      }
      tablePrice += '<tr>';
      if (prcurrency[i] == 'head') {
        if (pname[i] == '.') {
          tablePrice += '<td class="tdhp" colspan="6">' + pname[i] + '<\/td><\/tr>';
        }
        else {
          tablePrice += '<td class="tdh" colspan="6">' + pname[i] + '<\/td><\/tr>';
        }
        continue;
      }
      if (prcurrency[i] == 'header') {
        if (pname[i] == '.') {
          tablePrice += '<td class="tdrp" colspan="6">' + pname[i] + '<\/td><\/tr>';
        }
        else {
          tablePrice += '<td class="tdr" colspan="6">' + pname[i] + '<\/td><\/tr>';
        }
        continue;
      }
      if (prcurrency[i] == 'column') {
        tablePrice += '<td class="tdc">' + prcode[i] + '<\/td>';
        tablePrice += '<td class="tdc">' + prname[i] + '<\/td>';
        tablePrice += '<td class="tdc" colspan="3">' + prpack[i] + '<\/td>';
        tablePrice += '<td class="tdc">Валюта<\/td>';
      }
      else {
        numpp = numpp+1;
        tablePrice += '<td class="tdb t-center">' + numpp + '<\/td>';
        tablePrice += '<td class="tdb tdbws t-left">' + prname[i] + '<\/td>';
        tablePrice += '<td class="tdb t-center"><a href="index.html?price=' + prcode[i] + '&currency=uah#cnav">гривнах</a><\/td>';
        tablePrice += '<td class="tdb t-center"><a href="index.html?price=' + prcode[i] + '&currency=eur#cnav">евро</a><\/td>';
        tablePrice += '<td class="tdb t-center"><a href="index.html?price=' + prcode[i] + '&currency=usd#cnav">долларах</a><\/td>';
        tablePrice += '<td class="tdb t-center">' + prpack[i].toLowerCase() + '<\/td>';
      }
      tablePrice += '<\/tr>';
    }
    tablePrice += '<\/table>';
  }
  else {
    tablePrice = '<table id="tprice">';
    tablePrice += '<tr>';
    tablePrice += '<td>';
    tablePrice += '<div class="sprbttn usn" onclick="wrPrice(); return false;">Показать<\/div>';
    tablePrice += '<\/td>';
    tablePrice += '<\/tr>';
    tablePrice += '<\/table>';
  }
  document.write (tablePrice);
  pValPrice = '<div id="pvprice">&nbsp;<\/div>';
  document.write (pValPrice);
  document.write ('<script>wrPrice();</script>');
}
//End
