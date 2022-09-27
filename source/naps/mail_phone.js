describe('test mail input', () => {
    it('the same gmail', async () => {
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody> tr:nth-child(5)');
        //open
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@gmail.com');
        inputMailConfirm.setValue('laichivn@gmail.com');
        await browser.pause(2000);

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/mail/confirm1.png");
    });
    it('the same yahoo mail', async () => {
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody> tr:nth-child(5)');
        //open
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@yahoo.com');
        inputMailConfirm.setValue('laichivn@yahoo.com');
        await browser.pause(2000);

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/mail/confirm2.png");
    });
    it('different mail', async () => {
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody> tr:nth-child(5)');
        //open
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@yahoo.com');
        inputMailConfirm.setValue('laichivn@gmail.com');
        await browser.pause(2000);

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/mail/confirm3.png");
    });
});