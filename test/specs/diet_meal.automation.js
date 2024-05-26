describe('Open application', () => {
  it('Success opening to Home Screen', async () => {
    driver.setImplicitTimeout(6000);
    const selector =
      'new UiSelector().text("Welcome...").className("android.widget.TextView")';
    await expect(await $(`android=${selector}`)).toHaveTextContaining(
      'Welcome'
    );
    await $(
      'xpath://android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]'
    ).setValue('Salman Arassuli');
    await $(
      'xpath://android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]'
    ).setValue(67);
    await $(
      'xpath://android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]'
    ).setValue(174);
    await $(
      'xpath://android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]'
    ).click();
    await $(
      'xpath://android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]'
    ).click();
    await $(
      'xpath://android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_very_very_low"]'
    ).click();
    await $(
      'xpath://android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]'
    ).click();
  });
});
