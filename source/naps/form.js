
describe('required item input test', () => {
    it('2byte character', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputCompany = await $('#company');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let inputZipSelector = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let inputContent = await $('#content')
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container');
        let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('桜井　木野本');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('さくら　さくら');

        //input correct zipcode
        inputZipSelector.scrollIntoView();
        inputZipSelector.setValue('190-0100');
        await browser.pause(2000);

        //click button search
        searchBtn.click();
        await browser.pause(3000);

        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@yahoo.com');
        inputMailConfirm.setValue('laichivn@yahoo.com');
        await browser.pause(2000);

        //input content
        inputContent.setValue('このメールはNaps +E（株式会社ナップス）Webサイトよりお問い合わせいただいた方へ自動送信しています。お心当たりのない方は、恐れ入りますが下記までその旨ご連絡いただけまと幸いです');
        await browser.pause(2000);

        //submit

        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirmPage.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm1.png");
        viewConfirm2.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm1a.png");
        submitBtn.click();
        await browser.pause(3000);
    });
    it('1byte character', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputCompany = await $('#company');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let inputZipSelector = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let inputContent = await $('#content')
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01');
        let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('Ajimoto');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('アジア　あじもと');

        //input correct zipcode
        inputZipSelector.scrollIntoView();
        inputZipSelector.setValue('190-0100');
        await browser.pause(2000);

        //click button search
        searchBtn.click();
        await browser.pause(3000);

        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@yahoo.com');
        inputMailConfirm.setValue('laichivn@yahoo.com');
        await browser.pause(2000);

        //input content
        inputContent.setValue('hello sir');
        await browser.pause(2000);

        //submit

        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirmPage.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm2.png");
        viewConfirm2.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm2a.png");
        submitBtn.click();
        await browser.pause(3000);
    });
    it('max character', async () => {
        let viewForm = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01>form');
        let inputCompany = await $('#company');
        let inputNamefield = await $('#name');
        let inputFuriFiel = await $('#kana');
        let inputZipSelector = await $('#zip');
        let searchBtn = await $('#js-zip-btn');
        let inputTel = await $('#tel');
        let inputMail = await $('#mailaddress');
        let inputMailConfirm = await $('#mailaddress2');
        let inputContent = await $('#content')
        let selectCheckbox = await $('body >div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-policy.contact__policy>div>label>span');
        let submitBtn = await $('[type="submit"]');
        let viewConfirmPage = await $('body>div>main>div.l-container.contact__l-container> div.l-inner.contact__inner01');
        let viewConfirm2 = await $('body>div>main>div.l-container.contact__l-container>div.l-inner.contact__inner01>form>div.p-form-box>table>tbody>tr:nth-child(6)');
        //input name file
        await browser.url('http://naps:test@shinjuku.testing-web.com/contact/');
        viewForm.scrollIntoView();
        inputNamefield.waitForDisplayed(4000);
        inputNamefield.scrollIntoView();
        inputNamefield.setValue('スノーピーク34歳社長｢不倫辞');
        await browser.pause(2000);

        //input furigana
        inputFuriFiel.setValue('アジア　あじもと');

        //input correct zipcode
        inputZipSelector.scrollIntoView();
        inputZipSelector.setValue('190-0100');
        await browser.pause(2000);

        //click button search
        searchBtn.click();
        await browser.pause(3000);

        //input tel
        inputTel.setValue('0911938477');
        await browser.pause(2000);

        //input mail and confirm
        inputTel.scrollIntoView();
        inputMail.setValue('laichivn@yahoo.com');
        inputMailConfirm.setValue('laichivn@yahoo.com');
        await browser.pause(2000);

        //input content
        inputContent.setValue('「当社代表取締役社長執行役員である山井梨沙から、当社及びグループ会社の取締役の職務を辞任したいとの申し出がありました」新潟県三条市に本社を置くアウトドア用品メーカー、スノーピークが9月21日に発表したトップ交代人事が波紋を呼んでいる。4歳で創業家3代目の山井梨沙氏が「既婚男性との交際及び妊娠を理由として」、社長を辞任。同日開かれた臨時取締役会において、会長であり創業家2代目の山井太氏が梨沙氏に代わって社長を兼務することになった。スノーピークは山井太氏の父、山井幸雄氏が前身となる金物問屋を1958年に創業。社内起業の形で1988年に山井太氏がテントをはじめとするオートキャンプ用品の製造へ本格的に乗り出した。以来、高級品に強みを持ち、「スノーピーカー」と呼ばれる熱狂的なファンを作ってきた。');
        await browser.pause(2000);

        //submit

        selectCheckbox.click();
        await browser.pause(2000);
        console.log('checkbox', await selectCheckbox.isSelected());
        submitBtn.click();
        await browser.pause(2000);
        viewConfirmPage.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm3.png");
        viewConfirm2.scrollIntoView();
        await browser.pause(2000);
        await browser.saveScreenshot("source/screenshot/confirm3a.png");
        submitBtn.click();
        await browser.pause(3000);
    });
});