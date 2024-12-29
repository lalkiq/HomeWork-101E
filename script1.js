function Convertor(grivnas, exchangeRate) {
  const dollars = grivnas / exchangeRate;
  console.log(
    `У вас є ${grivnas} гривень, якщо ви хочете купити долар, то за ${grivnas} ви отримаєте ${dollars} доларів!`
  );
}

Convertor(2500, 42);
Convertor(5700, 42);
Convertor(28000, 42);
