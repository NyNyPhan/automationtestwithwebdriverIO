describe('input contact form', () => {
    it('correct value input only required item', async () => {
        //declare
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let inputZipSelector = await $('#js-zip-value');
        let searchBtn = await $('#js-zip-btn');
        let inputPhoneNumber = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let inputContent = await $('#content');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');


        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('会社名');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('フリガナ');

        //input address
        inputZipSelector.scrollIntoView();
        inputZipSelector.setValue('190-0100');
        await browser.pause(2000);
        searchBtn.click();
        await browser.pause(3000);

        //input phone number
        inputPhoneNumber.scrollIntoView();
        inputPhoneNumber.setValue('0123-23-2333');

        //input maill
        inputMail.setValue('ny1119@yopmail.com');

        //input confirm maill
        inputMailConfirm.setValue('ny1119@yopmail.com');

        //input contenti
        inputContent.scrollIntoView();
        inputContent.setValue('hello sir');
        await browser.pause(3000);

        //submit
        selectCheckbox.scrollIntoView();
        selectCheckbox.click();
     
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        //submit second
        await browser.pause(4000);
        submitBtn.click();

    });
});