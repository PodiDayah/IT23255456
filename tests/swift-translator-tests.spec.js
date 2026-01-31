const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert simple sentences',
      input: 'mama bodimata yanavaa',
      expected: 'මම බොඩිමට යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    //Interrogative (questions) forms
    {
      tcId: 'Pos_Fun_002',
      name: 'Interrogative (questions) forms',
      input: 'oyaa adha mehe enavadha ?',
      expected: 'ඔයා අද මෙහෙ එනවද ?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    //Positive forms
    {
      tcId: 'Pos_Fun_003',
      name: 'Positive forms',
      input: 'oyaa eeka hariyata karalaa',
      expected: 'ඔයා ඒක හරියට කරලා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Greetings
    {
      tcId: 'Pos_Fun_0004',
      name: 'Greetings',
      input: 'mata samaavenna',
      expected: 'මට සමාවෙන්න',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    //  Polite phrasing
    {
      tcId: 'Pos_Fun_0005',
      name: ' Polite phrasing',
      input: 'karunaakarala mata ahaganna puluvandha ?',
      expected: 'කරුනාකරල මට අහගන්න පුලුවන්ද ?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    // Frequently used day-to-day expressions
    {
      tcId: 'Pos_Fun_0006',
      name: 'Frequently used day-to-day expressions',
      input: 'mata mahansiyi',
      expected: 'මට මහන්සියි',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Multi-word expressions and frequent collocations
    {
      tcId: 'Pos_Fun_0007',
      name: 'Multi-word expressions and frequent collocations',
      input: 'mata epaa',
      expected: 'මට එපා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Joined vs segmented word variations (Proper spacing)
    {
      tcId: 'Pos_Fun_0008',
      name: 'Joined vs segmented word variations (Proper spacing)',
      input: 'mama sellam karanna yanavaa',
      expected: 'මම සෙල්ලම් කරන්න යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Repeated word expressions used for emphasis
    {
      tcId: 'Pos-Fun_0009',
      name: 'Repeated word expressions used for emphasis',
      input: 'bala bala',
      expected: 'බල බල',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Tense variations (Past)
    {
      tcId: 'Pos-Fun_0010',
      name: 'Tense variations (Past)',
      input: 'mama iiye pansalata giyaa',
      expected: 'මම ඊයෙ පන්සලට ගියා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Negation patterns
    {
      tcId: 'Pos-Fun_0011',
      name: 'Negation patterns',
      input: 'api heta enne nae',
      expected: 'අපි හෙට එන්නෙ නැ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a Plular usage and pronoun variations
    {
      tcId: 'Pos-Fun_0012',
      name: 'Convert a Plular usage and pronoun variations',
      input: 'api kamu',
      expected: 'අපි කමු',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a Request forms with varying degrees of politeness
    {
      tcId: 'Pos-Fun_0013',
      name: 'Convert a Request forms with varying degrees of politeness',
      input: 'anee ehema karanna epaa',
      expected: 'අනේ එහෙම කරන්න එපා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    //  Convert a English technical/brand terms embedded in Singlish
    {
      tcId: 'Pos-Fun_0014',
      name: ' Convert a English technical/brand terms embedded in Singlish',
      input: 'wifi eka vaeda karanavadha ?',
      expected: 'wifi එක වැඩ කරනවද ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    // Convert a sentences containing places and common English words that should remain as they are
    {
      tcId: 'Pos-Fun_0015',
      name: 'Convert a sentences containing places and common English words that should remain as they are',
      input: 'group meeting ekata oyaa join unaadha ? ',
      expected: 'group meeting එකට ඔයා join උනාද ? ',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    // Convert a English abbreviations and short forms
    {
      tcId: 'Pos-Fun_0016',
      name: 'Convert a English abbreviations and short forms',
      input: 'website ekea url eka evanna',
      expected: 'website එකේ url එක එවන්න',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a Inputs containing punctuation marks
    {
      tcId: 'Pos-Fun_0017',
      name: 'Convert a Inputs containing punctuation marks',
      input: 'budhusaranayi oba saematama ! ',
      expected: 'බුදුසරනයි ඔබ සැමටම ! ',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Covert a currency, time formats, dates, and units of measurement
    {
      tcId: 'Pos-Fun_0018',
      name: 'Covert a currency, time formats, dates, and units of measurement',
      input: 'oyaa mata Rs.500 dhenna thiyanavaa',
      expected: 'ඔයා මට Rs.500 දෙන්න තියනවා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a paragraph inputs
    {
      tcId: 'Pos-Fun_0019',
      name: 'Convert a paragraph inputs',
      input: 'api heta trip ekak yanavaa.badhulle thamayi yanna hithagena innee.oyaalath apith ekka yanna enavadha.',
      expected: 'අපි හෙට trip එකක් යනවා.බදුල්ලෙ තමයි යන්න හිතගෙන ඉන්නේ.ඔයාලත් අපිත් එක්ක යන්න එනවද.',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    // Convert a slang and colloquial phrasing
    {
      tcId: 'Pos-Fun_0020',
      name: 'Convert a slang and colloquial phrasing',
      input: 'adoo  mata eeka aran enna baeri unaa kiyapanko',
      expected: 'අඩෝ  මට ඒක අරන් එන්න බැරි උනා කියපන්කො',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M'
    },
    // Convert a complex sentences 
    {
      tcId: 'Pos-Fun_0021',
      name: 'Convert a complex sentences ',
      input: 'oyaa ikmanata enakan mama methana godak velaavaka idhan balaagena innavaa',
      expected: 'ඔයා ඉක්මනට එනකන් මම මෙතන ගොඩක් වෙලාවක ඉදන් බලාගෙන ඉන්නවා',

      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M'
    },
    // Convert a response
    {
      tcId: 'Pos-Fun_0022',
      name: 'Convert a response',
      input: 'hari mata puluvan',
      expected: 'හරි මට පුලුවන්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a Informal phrasing
    {
      tcId: 'Pos-Fun_0023',
      name: 'Convert a Informal phrasing',
      input: 'ooyi mata ooka dhipan',
      expected: 'ඕයි මට ඕක දිපන්',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert a Missing spaces / joined word
    {
      tcId: 'Pos-Fun_0024',
      name: 'Convert a Missing spaces / joined word',
      input: 'mamagedharagiyaa',
      expected: 'මමගෙදරගියා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
  ],
  
  negative: [
   // Convert  All‑caps simple negative
    {
      tcId: 'Neg-Fun_0025',
      name: 'Convert  All‑caps simple negative',
      input: 'LECTURE EKA NAE',
      expected: 'lecture එක නැ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Convert random upper/lower case letters in a question
    {
      tcId: 'Neg-Fun_0026',
      name: 'Convert random upper/lower case letters in a question',
      input: 'adha PanthIyata giyaAdha',
      expected: 'අද පන්තියට ගියාද',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Sentence containing special symbol between names
    {
      tcId: 'Neg-Fun_0027',
      name: 'Sentence containing special symbol between names',
      input: 'saman & sahan adha aavaa',
      expected: 'සමන් සහ සහන් අද ආවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Missing spaces
    {
      tcId: 'Neg-Fun_0028',
      name: 'Missing spaces',
      input: 'mamapanthiaavaa',
      expected: 'මම පන්ති ආවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Incorrect slang phonetic mapping
    {
      tcId: 'Neg-Fun_0029',
      name: 'Incorrect slang phonetic mapping',
      input: 'එල macho !',
      expected: 'එල මචෝ !',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Special character interruption
    {
      tcId: 'Neg-Fun_0030',
      name: 'Special character interruption',
      input: 'None',
      expected: 'None',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Currency symbol placement
    {
      tcId: 'Neg-Fun_0031',
      name: 'Currency symbol placement',
      input: 'Rs.500',
      expected: 'රු.500',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Repeated word expressions used for emphasis
    {
      tcId: 'Neg-Fun_0032',
      name: 'Repeated word expressions used for emphasis',
      input: 'hariharihari',
      expected: 'හරි හරි හරි',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // Mixed case for question form
    {
      tcId: 'Neg-Fun_0033',
      name: 'Mixed case for question form',
      input: 'eMail eka mokakdha',
      expected: 'email එක මොකක්ද',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    // The letter 'W' is not working
    {
      tcId: 'Neg-Fun_0034',
      name: 'The letter W is not working',
      input: 'wen wenna wenne nae',
      expected: 'වෙන් වෙන්න වෙන්නෙ නැ ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    } 
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Sinhala output suggest automatically in real-time',
    input: 'mama adha enavaa',
    partialInput: 'මම අද එ',
    expectedFull: 'මම අද එනවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
