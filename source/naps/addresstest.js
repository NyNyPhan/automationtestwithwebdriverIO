describe('test address fied', () => {
    it('correct postal with dash', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(4)');
        let inputCodePostal = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');

        //open link
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');

        //input correct zipcode
        viewForm.scrollIntoView();
        inputCodePostal.setValue('190-0100');
        await browser.pause(2000);
        
        //click button search
        searchBtn.click();
        await browser.pause(2000);

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm1.png");

    });
    it('correct postal without dash', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(4)');
        let inputCodePostal = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');
        //open link
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');

        //input correct zipcode
        viewForm.scrollIntoView();
        inputCodePostal.setValue('1900100');
        await browser.pause(2000);
        
        //click button search
        searchBtn.click();
        await browser.pause(2000);

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm2.png");
    });
    it('correct postal fullwidth', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(4)');
        let inputCodePostal = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');
        //open link
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');

        //input correct zipcode
        viewForm.scrollIntoView();
        inputCodePostal.setValue('１９００１００');
        await browser.pause(2000);
        
        //click button search
        searchBtn.click();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm3.png");

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm3a.png");
    });
    it('correct postal fullwidth with dash', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(4)');
        let inputCodePostal = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');
        //open link
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');

        //input correct zipcode
        viewForm.scrollIntoView();
        inputCodePostal.setValue('１９０ー０１００');
        await browser.pause(2000);
        
        //click button search
        searchBtn.click();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm4.png");

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm4a.png");
    });
    it('3 characters', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(4)');
        let inputCodePostal = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let selectCheckbox = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label');
        let submitBtn = await $('[type="submit"]');
        //open link
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');

        //input correct zipcode
        viewForm.scrollIntoView();
        inputCodePostal.setValue('190');
        await browser.pause(2000);
        
        //click button search
        searchBtn.click();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm4.png");

        //submit
        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewForm.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/address/confirm4a.png");
    });
});