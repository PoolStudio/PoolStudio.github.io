//--- Вывод прайса ---------------------------------------------------------------------------------------
function wrPrice() {
  if (price == 'price') {return false;}
  rowspan = 1;
  cureur = ceur[ceur.length-1];
  curusd = cusd[cusd.length-1];
  tablePrice = '<table id="tprice">';
  for (i = 0; i < pcode.length; i++) {
    if (pcurrency[i] == 'title') {
      tablePrice += '<caption>' + pname[i] + '<\/caption>';
      continue;
    }
    tablePrice += '<tr>';
    if (pcurrency[i] == 'head') {
      if (pname[i] == '.') {
        tablePrice += '<td class="tdhp" colspan="4">' + pname[i] + '<\/td><\/tr>';
      }
      else {
        tablePrice += '<td id="n' + pid[i] + '" class="tdh" colspan="4"><a id="p' + pid[i] + '" name="p' + pid[i] + '"></a>' + pname[i] + '<\/td><\/tr>';
      }
      continue;
    }
    if (pcurrency[i] == 'header') {
      if (pname[i] == '.') {
        tablePrice += '<td class="tdrp" colspan="4"><a id="p' + pid[i] + '" name="p' + pid[i] + '"></a>' + pname[i] + '<\/td><\/tr>';
      }
      else {
        tablePrice += '<td class="tdr" colspan="4"><a id="p' + pid[i] + '" name="p' + pid[i] + '"></a>' + pname[i] + '<\/td><\/tr>';
      }
      continue;
    }
    if (pcurrency[i] == 'column') {
      tablePrice += '<td class="tdc">' + pcode[i] + '<\/td>';
      tablePrice += '<td class="tdc">' + pname[i] + '<\/td>';
      if (colnum == 4) {tablePrice += '<td class="tdc">' + ppack[i] + '<\/td>';}
      tablePrice += '<td class="tdc">' + pprice[i] + curr +'<\/td>';
    }
    else {
      tablePrice += '<td class="tdb t-left">' + pcode[i] + '<\/td>';
      if (rowspan == 1) {
        for (j = i+1; j < pcode.length; j++) {
          if (pname[j] == 0) {
            rowspan = rowspan + 1;
          }
          else {
            break;
          }
        }
      }
      if (rowspan == 1) {
        if (pname[i] != 0) {
          tablePrice += '<td class="tdb tdbws t-left">' + pname[i] + '<\/td>';
        }
      }
      else {
        if (pname[i] != 0) {
          tablePrice += '<td class="tdb tdbws t-left" rowspan="' + rowspan + '">' + pname[i] + '<\/td>';
        }
        rowspan = rowspan - 1;
      }
      if (colnum == 4) {tablePrice += '<td class="tdb t-center">' + ppack[i] + '<\/td>';}
      pricecur = 0;
      if (pcurrency[i] == 'eur') {
        if (currency == 'eur') {pricecur = pprice[i];}
        if (currency == 'usd') {pricecur = pprice[i] * cureur / curusd;}
        if (currency == 'uah') {pricecur = Math.ceil(pprice[i] * cureur);}
      }
      if (pcurrency[i] == 'usd') {
        if (currency == 'eur') {pricecur = pprice[i] * curusd / cureur;}
        if (currency == 'usd') {pricecur = pprice[i];}
        if (currency == 'uah') {pricecur = Math.ceil(pprice[i] * curusd);}
      }
      if (pcurrency[i] == 'uah') {
        if (currency == 'eur') {pricecur = pprice[i] / cureur;}
        if (currency == 'usd') {pricecur = pprice[i] / curusd;}
        if (currency == 'uah') {pricecur = pprice[i];}
      }
      tablePrice += '<td class="tdb t-right">' + separ(pricecur.toFixed(2)) + '<\/td>';
    }
    tablePrice += '<\/tr>';
  }
  tablePrice += '<\/table>';
  document.getElementById("tprice").innerHTML = tablePrice;
  pValPrice = '<div class="b-center">';
  if (currency != 'usd') {pValPrice += '<a href="index.html?price='+price+'&currency=usd#pricem"><div class="bttnsmbl f-right" data-hint="Смотреть цены в долларах"><span class="smblusd"></span></div></a>';}
  if (currency != 'eur') {pValPrice += '<a href="index.html?price='+price+'&currency=eur#pricem"><div class="bttnsmbl f-right" data-hint="Смотреть цены в евро"><span class="smbleur"></span></div></a>';}
  if (currency != 'uah') {pValPrice += '<a href="index.html?price='+price+'&currency=uah#pricem"><div class="bttnsmbl f-right" data-hint="Смотреть цены в гривнах"><span class="smbluah"></span></div></a>';}
  pValPrice += '</div>';
  document.getElementById('pvprice').style.display = 'block';
  document.getElementById("pvprice").innerHTML = pValPrice;
}
//End
