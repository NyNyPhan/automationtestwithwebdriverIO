describe('test validate', () => {
    it('not input', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        // let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        // let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('');

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/IMGERROR/confirm1.png");
    });
    it('1bytespace', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        // let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        // let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue(' ');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue(' ');

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/IMGERROR/confirm2.png");
    });
    it('2bytespace', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        // let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        // let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('　');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('　');

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/IMGERROR/confirm3.png");
    });
    it('over15characters2byte', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        // let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        // let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('スノーピーク34歳社長｢不倫辞」');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('スノーピーク34歳社長｢不倫辞」スノーピーク34歳社長｢不倫辞」');

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/IMGERROR/confirm4.png");
    });
    it('over15characters1byte', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        // let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        // let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('Snow Peak 34-year-old president');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('Snow Peak 34-year-old president');

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/IMGERROR/confirm5.png");
    });
});