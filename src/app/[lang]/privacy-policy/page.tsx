import { Locale } from "@/i18n-config";
import styles from "./privacy-policy.module.scss";

export default function PrivacyPolicyPage({ params }: { params: { lang: Locale } }) {
  const titles = {
    en: "Privacy Policy",
    hy: "Գաղտնիության քաղաքականություն",
    ru: "Политика конфиденциальности"
  };

  const ENContent = () => (
    <div className={styles.privacyContent}>
      <h1 className={styles.title}>
        OVERPACK PRIVACY POLICY
      </h1>
      
      <div className={styles.dates}>
        <p>Effective Date: January 15, 2025</p>
        <p>Last Updated: January 15, 2025</p>
      </div>

      <h2 className={styles.sectionTitle}>I. GENERAL PROVISIONS</h2>
      <p>This privacy policy (hereinafter also referred to as the Privacy Policy) applies to information that private entrepreneur &ldquo;GAGIK BAGHDASARYAN GRIGOR&rdquo; (TIN: 28345959, address: 0048, Republic of Armenia, Yerevan, Norashen Street, Bldg. 11, Apt. 54) (hereinafter also referred to as Overpack or P/E or the Mobile Application) may receive from the P/E website www.overpack.am and/or the Overpack mobile application (hereinafter also referred to as the Online Store) regarding the user (hereinafter also referred to as the User) (in the event of joint reference to P/E and the User, they will hereinafter be referred to as the Parties).</p>
      
      <p>The Private Entrepreneur does not control and/or is not responsible for third-party websites and/or mobile applications that the User may access through links in the Online Store.</p>
      
      <p>By registering with the Online Store and/or providing personal information to the Private Entrepreneur, the User unconditionally agrees to this Privacy Policy and its terms. If the User disagrees with any of the provisions of the Privacy Policy, they must refrain from using the Online Store.</p>
      
      <p>The Company collects the User&apos;s personal data when they provide it in the online store, send it by email, or communicate it in person. In accordance with current personal data protection legislation, the User has the right to request that their personal data be amended, updated, or deleted at any time.</p>

      <h2 className={styles.sectionTitle}>II. PRINCIPLES</h2>
      <p>This policy is based on the following principles, in particular:</p>
      
      <p><strong>1. Data Quality.</strong></p>
      <p><strong>1.1. Personal data must:</strong></p>
      <p>1.1.2. be obtained and processed fairly and lawfully,</p>
      <p>1.1.3. be stored for specified and lawful purposes and not used for other purposes,</p>
      <p>1.1.4. be adequate, relevant, and not excessive in relation to the purposes for which they are stored,</p>
      <p>1.1.5. be accurate and, where necessary, updated,</p>
      <p>1.1.6. stored in a manner that permits identification of data subjects for no longer than is necessary for the purposes for which the data are stored.</p>
      
      <p><strong>2. Data Security.</strong></p>
      <p><strong>2.1. Appropriate security measures must be taken to protect personal data stored by the Company from accidental or unauthorized destruction or accidental loss, as well as from unauthorized access, modification, or dissemination.</strong></p>
      
      <p><strong>3. Additional Guarantees for Data Subjects.</strong></p>
      <p><strong>3.1. The User must be able to:</strong></p>
      <p>3.1.1. verify the existence of an automated personal data file, its primary purposes, as well as the identity of the file controller, their primary place of residence and work,</p>
      <p>3.1.2. obtain confirmation within a reasonable time and without undue delay or expense as to whether personal data concerning him or her are stored in an automated data file and to receive these data in a form accessible to him or her,</p>
      <p>3.1.3. request, where necessary, the rectification or deletion of data if they have been processed in violation of the provisions established by law,</p>
      <p>3.1.4. resort to legal remedies if a request for confirmation or, as the case may be, for receipt, rectification or deletion of the data specified in subparagraphs 2 and 3 of this paragraph has not been submitted.</p>

      <h2 className={styles.sectionTitle}>III. APPLICABLE LAWS AND STANDARDS</h2>
      <p>This policy is based on and compiled in accordance with the following laws and standards, in particular:</p>
      <p>1. The Law of the Republic of Armenia &ldquo;On the Protection of Personal Data,&rdquo;</p>
      <p>2. The Law of the Republic of Armenia &ldquo;On the Protection of Consumer Rights,&rdquo;</p>
      <p>3. The Law of the Republic of Armenia &ldquo;On Restrictions on the Use, Sale, and Consumption of Tobacco Products,&rdquo;</p>
      <p>4. The Civil Code of the Republic of Armenia,</p>
      <p>5. The Google Play Platform Developer Program Rules, including the Data Security Policy,</p>
      <p>6. Apple App Store App Review Guidelines, Privacy-Responsible Food Labeling,</p>
      <p>7. International Guidelines (GDPR Principles).</p>

      <h2 className={styles.sectionTitle}>IV. BASIC CONCEPTS</h2>
      <p>In this Privacy Policy, the following terms have, inter alia, the following meanings:</p>
      <p>a) Personal data – any information constituting &ldquo;personal data&rdquo; within the meaning of the RA Law &ldquo;On the Protection of Personal Data,&rdquo; and/or any other information and/or data about the User that allows or may allow direct or indirect identification of an individual,</p>
      <p>b) Processing of personal data is any operation or set of operations related to the collection, recording, systematization, organization, storage, use, modification, restoration, transfer, correction, blocking, destruction and (or) other actions with personal data, regardless of the form and method of their implementation (including automated and (or) using any technical means and (or) mechanical means),</p>
      <p>c) Transfer of personal data to third parties — actions aimed at transferring personal data to a third party or making it available to a specific or unspecified group of persons, including publishing it at events, posting it on information and communication networks, or otherwise providing access to personal data to others,</p>
      <p>d) Use of personal data — an action performed with personal data, directly or indirectly, for the purpose of making decisions, forming opinions, obtaining rights, granting advantages, or restricting or depriving rights, which entails or may entail legal consequences for the personal data subject or third parties or otherwise affects their rights and freedoms,</p>
      <p>e) Destruction of personal data – actions that make it impossible to restore the contents of personal data in the information system,</p>
      <p>f) User – an adult individual and/or legal entity and/or individual entrepreneur accessing the www.overpack.am website and/or using the Overpack mobile app.</p>
      <p>g) Personal data protection – a set of technical, organizational, and organizational-technical measures aimed at protecting information related to a specific or identifiable personal data subject.</p>
      <p>h) Website – the website www.overpack.am, located at https://www.overpack.am,</p>
      <p>i) Mobile App – the Overpack mobile app, available on the App Store and/or Google Play.</p>

      <h2 className={styles.sectionTitle}>V. AGE RESTRICTIONS</h2>
      <p>In accordance with the RA Law &ldquo;On Restrictions on the Use, Sale, and Consumption of Tobacco Products,&rdquo; individuals purchasing tobacco products through the App must be over 18 years of age at the time of purchase.</p>
      <p>The User (an individual using the Application) is responsible for the accuracy of the age stated, as the Private Entrepreneur does not perform additional age verification on individuals.</p>
      <p>The Private Entrepreneur is not responsible for any consequences arising from the provision by the User (an individual) of false, incomplete, inaccurate, or intentionally distorted information, including information regarding the User&apos;s age.</p>
      <p>The Private Entrepreneur does not directly or indirectly collect data from minors.</p>

      <h2 className={styles.sectionTitle}>VI. PERSONAL DATA RECEIVED AND PROCESSED BY A PRIVATE ENTREPRENEUR</h2>
      <p>When the User uses the Overpack mobile app, the app provides the PRIVATE ENTREPRENEUR with the following personal data, in particular:</p>
      
      <h3 className={styles.subsectionTitle}>For individuals:</h3>
      <p>first name, last name,</p>
      <p>phone number,</p>
      <p>address,</p>
      <p>email address,</p>
      <p>date of birth,</p>
      <p>bank details,</p>
      <p>The User&apos;s purchase history in the mobile app,</p>
      <p>The User&apos;s list of preferred products in the mobile app,</p>
      <p>Delivery addresses and other information provided by the User for delivery,</p>
      <p>Electronic and other correspondence between the User and the Private Entrepreneur, the Private Entrepreneur&apos;s employees, and other persons related to the processing and fulfillment of the User&apos;s order,</p>
      <p>Other information necessary for the processing and fulfillment of the User&apos;s order.</p>
      
      <h3 className={styles.subsectionTitle}>For legal entities:</h3>
      <p>legal entity name,</p>
      <p>TIN,</p>
      <p>phone number,</p>
      <p>address,</p>
      <p>email address,</p>
      <p>bank details,</p>
      <p>the User&apos;s purchase history in the mobile app,</p>
      <p>the User&apos;s preferred product list in the mobile app,</p>
      <p>delivery addresses, and other information provided by the User for delivery,</p>
      <p>Electronic and other correspondence between the User and the Private Entrepreneur, employees of the Private Entrepreneur, and other persons related to the execution and fulfillment of the User&apos;s order,</p>
      <p>name, surname, passport and/or identity card details, telephone number, address, email address,</p>
      <p>other information necessary for the execution and fulfillment of the User&apos;s order to the executive and/or governing body of the legal entity and/or employee(s) of that legal entity.</p>
      
      <p>When the User uses the Overpack mobile application, the latter provides the Private Entrepreneur with the following automatically collected data, in particular, data that is automatically transmitted to the Private Entrepreneur during the use of the mobile application, via software installed on the User&apos;s device (mobile phone, computer, etc.), namely:</p>
      <p>Actions performed by the User in the mobile application, the period of visit,</p>
      <p>Device data: operating system, model,</p>
      <p>browser type,</p>
      <p>device type,</p>
      <p>IP address,</p>
      <p>error logs, error diagnostics,</p>
      <p>other cookie data.</p>
      
      <p>When the User uses the Overpack mobile app, the app provides the following data to third parties, including:</p>
      <p>payment systems, transaction status,</p>
      <p>delivery service providers, order status, and confirmation of receipt.</p>

      <h2 className={styles.sectionTitle}>VII. PURPOSES OF COLLECTING AND PROCESSING PERSONAL DATA OF USERS</h2>
      <p>The private entrepreneur collects and stores only the personal data necessary to provide services and/or fulfill contracts concluded with the User.</p>
      <p>The private entrepreneur uses the User&apos;s personal data, in particular, for the following purposes:</p>
      <p>User identification.</p>
      <p>Providing the User with access to personalized service resources.</p>
      <p>Establishing feedback with the User, including sending notifications and requests related to the use of the mobile application.</p>
      <p>Processing requests and applications submitted by the User, delivering orders,</p>
      <p>Concluding contracts with the User, fulfilling and processing orders,</p>
      <p>Verifying the accuracy and completeness of personal data provided by the User,</p>
      <p>Providing the User with effective technical support in the event of problems using the Mobile Application,</p>
      <p>Sending the User advertising messages with their consent,</p>
      <p>Improving the quality and usability of the mobile application, and developing new services,</p>
      <p>to detect fraud and ensure security,</p>
      <p>for marketing (subject to express consent),</p>
      <p>for other purposes that may be provided for by the agreement concluded between the Parties, as well as by the legislation of the Republic of Armenia.</p>

      <h2 className={styles.sectionTitle}>VIII. TERMS OF PERSONAL DATA PROCESSING AND TRANSFER TO THIRD PARTIES</h2>
      <p>Users&apos; personal data is processed in accordance with the Law of the Republic of Armenia &ldquo;On the Protection of Personal Data.&rdquo;</p>
      <p>User personal data is processed indefinitely, by any legal means, including in personal data information systems, with or without the use of automated tools.</p>
      <p>All user personal data is kept confidential and secure.</p>
      <p>A private entrepreneur has the right to transfer the User&apos;s personal data to third parties, including courier, postal, and delivery companies, as well as other persons, in the following cases:</p>
      <p>The User has consented to such actions,</p>
      <p>The transfer is necessary for the User to use the mobile application or to fulfill the contract concluded with the User,</p>
      <p>To protect the rights and legitimate interests of the private entrepreneur,</p>
      <p>In other cases stipulated by law.</p>
      
      <p>The mobile application may contain links to other websites not operated by the Private Entrepreneur. Clicking on a link will redirect the User to that third-party website. The Private Entrepreneur recommends that the User review the privacy policy of each website they visit. The Private Entrepreneur has no control over and is not responsible for the content, privacy policies, or practices of third-party websites and/or their terms.</p>
      
      <p>For the purposes of this Policy, third parties include:</p>
      <p>- payment system operators (e.g., the Ameriabank system of Ameriabank CJSC),</p>
      <p>- delivery and/or supply entities (licensed carriers (forwarders)),</p>
      <p>- state and/or local government bodies (regardless of their legal form and without any exceptions) in cases stipulated by law.</p>
      <p>The list of third parties specified in this paragraph is not exhaustive and under no circumstances may be interpreted in such a way as to preclude the transfer of personal data to other parties.</p>
      
      <p>The Private Entrepreneur guarantees that the disclosure and/or transfer of Users&apos; personal data to third parties is carried out solely for the purposes specified in this Policy.</p>
      <p>The Private Entrepreneur guarantees that the disclosure and/or transfer of Users&apos; personal data to third parties is not and will not be carried out for profit. For example, the Private Entrepreneur has never sold personal data.</p>
      
      <p>Users&apos; personal data is stored in the Republic of Armenia. If personal data is processed outside the Republic of Armenia, standard contractual clauses or equivalent guarantees apply.</p>

      <h2 className={styles.sectionTitle}>IX. MEASURES USED TO PROTECT USERS&apos; PERSONAL DATA</h2>
      <p>When processing personal data, a private entrepreneur takes the necessary legal, organizational, and technical measures to protect personal data, including from unauthorized or accidental access, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other illegal actions in relation to the User&apos;s personal data, in accordance with the requirements of the legislation on the protection of personal data.</p>
      
      <p>The private entrepreneur stores the personal data of Users for the following periods, in particular:</p>
      <p>- User account data: from the moment the User registers in the mobile application until the User and/or the Private Entrepreneur closes and/or deletes the User&apos;s account,</p>
      <p>- Transaction data concluded between the Private Entrepreneur and the User: from the moment an individual transaction and/or transactions and/or agreement are concluded until the expiration of the statutory retention periods for such data (5 years).</p>

      <h2 className={styles.sectionTitle}>X. RIGHTS AND RESPONSIBILITIES OF THE PARTIES</h2>
      <p>The User has the right, in particular:</p>
      <p>- to receive information about the processing of their personal data in the manner and to the extent established by the Law of the Republic of Armenia &ldquo;On the Protection of Personal Data&rdquo;,</p>
      <p>- to request that the Private Entrepreneur clarify, block, or destroy their personal data if the personal data is incomplete, outdated, contains inaccuracies, or was obtained and used in violation of the stated purposes and requirements established by law,</p>
      <p>- Revoke consent to the processing of personal data. The User should be aware that refusal to provide personal data, refusal to consent to the processing of personal data by a Private Entrepreneur, or the revocation of previously given consent may result in the Private Entrepreneur being unable to further fulfill its obligations to the User.</p>
      <p>- Receive a copy of your personal data upon request,</p>
      <p>- Exercise your rights under this clause by sending a corresponding request and/or application and/or complaint to the Private Entrepreneur&apos;s email address: overpackhookahmarket@gmail.com,</p>
      <p>- Exercise other rights provided by law.</p>
      
      <p>The User is obligated, in particular:</p>
      <p>- to provide the Private Entrepreneur with accurate information necessary for using the mobile application,</p>
      <p>- to inform the Private Entrepreneur of any changes to their personal data required to complete the transaction and/or provide the service to the User before performing the next transaction through the mobile application,</p>
      <p>- to fulfill other obligations stipulated by law.</p>
      
      <p>The Private Entrepreneur has the right, in particular:</p>
      <p>- to process personal data obtained by the Private Entrepreneur on legal grounds for the purposes specified in this Policy,</p>
      <p>- Restrict the User&apos;s access to their personal data if such access violates the rights and legitimate interests of third parties,</p>
      <p>- other rights provided by law.</p>
      
      <p>A private entrepreneur is obligated, in particular:</p>
      <p>- to provide the User with the information stipulated by the RA Law &ldquo;On the Protection of Personal Data&rdquo; upon their request,</p>
      <p>- to take the necessary measures to supplement, update, correct, or destroy personal data that is incomplete, inaccurate, outdated, illegally obtained, or is not necessary for achieving the processing purposes,</p>
      <p>- to use the received personal data exclusively for the purposes specified in the Privacy Policy,</p>
      <p>- to ensure the confidentiality of the User&apos;s personal data,</p>
      <p>- Fulfill other obligations stipulated by the Privacy Policy and the legislation of the Republic of Armenia regarding the processing of personal data,</p>
      <p>- respond to requests and/or applications and/or demands sent by the User to the Private Entrepreneur&apos;s email address overpackhookahmarket@gmail.com within no more than 30 days of their receipt,</p>
      <p>- other obligations stipulated by law.</p>

      <h2 className={styles.sectionTitle}>XI. DISPUTE RESOLUTION PROCEDURE</h2>
      <p>Any disputes arising from this Privacy Policy will be resolved through negotiation.</p>
      <p>The parties agree to establish a pre-trial procedure for resolving disputes arising from this Privacy Policy.</p>
      <p>The party alleging a violation is obligated to submit a written pre-trial claim to the party claiming the violation. If no response is received within 30 calendar days of receipt of the pre-trial claim, or if the claim is rejected, the dispute may be referred to a competent court of the Republic of Armenia.</p>
      <p>The applicable law to the Privacy Policy is the legislation of the Republic of Armenia.</p>

      <h2 className={styles.sectionTitle}>XII. OTHER PROVISIONS</h2>
      <p>The Privacy Policy takes effect upon registration and/or authorization of the User in the mobile application and is an integral part of the user agreement for the use of the mobile application owned by the Private Entrepreneur. By registering and/or authorizing in the mobile application, the User confirms that they have fully read the Privacy Policy and have no objections to it.</p>
      <p>The Private Entrepreneur reserves the right to unilaterally amend the Privacy Policy at any time. The new version of the Privacy Policy takes effect from the moment it is posted by the Private Entrepreneur in the mobile app and/or on the website and/or in the online store, unless otherwise provided in the new version of the Privacy Policy. When placing each order through the mobile app, the User confirms that they have read and agree to the current version of the Privacy Policy available in the mobile app.</p>
      <p>The termination, cancellation, or invalidity of any part of the Privacy Policy shall not entail the termination, cancellation, or invalidity of the remaining parts.</p>
      <p>The Privacy Policy has been drafted in Armenian, Russian, and English and is binding on the Parties. In the event of any discrepancies between the Armenian, Russian, and English versions of the Privacy Policy, the Armenian version shall prevail.</p>

      <h2 className={styles.sectionTitle}>XIII. LEGAL INFORMATION ON TOBACCO</h2>
      <p>• The app does not promote or encourage hookah use.</p>
      <p>• No claims are made that could indicate social, psychological, or medical benefits.</p>
      <p>• According to the legislation of the Republic of Armenia:</p>
      <p>&ldquo;Smoking is harmful to health. This product is intended for adults (18+) only.&rdquo;</p>
    </div>
  );

  const HYContent = () => (
    <div className={styles.privacyContent}>
      <h1 className={styles.title}>
        OVERPACK-Ի ԳԱՂՏՆԻՈՒԹՅԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ
      </h1>
      
      <div className={styles.dates}>
        <p>Գործողության ամսաթիվ: 2025 թվականի հունվարի 15</p>
        <p>Վերջին թարմացում: 2025 թվականի հունվարի 15</p>
      </div>

      <h2 className={styles.sectionTitle}>I. ԸՆԴՀԱՆՈՒՐ ԴՐՈՒՅԹՆԵՐ</h2>
      <p>Սույն գաղտնիության քաղաքականությունը (այսուհետ նաև՝ Գաղտնիության քաղաքականություն) տարածվում է այն տեղեկատվության նկատմամբ, որը «Գագիկ Գրիգորի Բաղդասարյան» անհատ ձեռնարկատերը (ՀՎՀՀ՝ 28345959, հասցե՝ 0048, ՀՀ, ք.Երևան, Նորաշեն թղմ. 11 շենք, բն. 54) (այսուհետ նաև՝ Overpack կամ Ա/Ձ կամ Բջջային հավելված) կարող է ստանալ Ա/Ձ-ին պատկանող www.overpack.am կայքէջից և/կամ Overpack բջջային հավելվածից (այսուհետ նաև՝ Առցանց խանութ) օգտվողի (այսուհետ նաև՝ Օգտատեր) (Ա/Ձ-ի և Օգտատիրոջ համատեղ հիշատակման դեպքում այսուհետ կկոչվեն Կողմեր) վերաբերյալ։</p>
      
      <p>Ա/Ձ-ն չի վերահսկում և/կամ պատասխանատվություն չի կրում երրորդ անձանց այն կայքերի և/կամ բջջային հավելվածների համար, որոնցով Օգտատերը կարող է անցնել Առցանց խանութում առկա հղումներով։</p>
      
      <p>Գրանցվելով Առցանց խանութում և/կամ Ա/Ձ-ին փոխանցելով իր անձնական տվյալները՝ Օգտատերն անվերապահորեն համաձայնվում է սույն քաղաքականության և դրա պայմանների հետ: Գաղտնիության քաղաքականության որևէ պայմանի հետ համաձայն չլինելու դեպքում Օգտատերը պետք է զերծ մնա Առցանց խանութից օգտվելուց:</p>
      
      <p>Ընկերությունն Օգտատիրոջ անձնական տվյալները հավաքում է այն ժամանակ, երբ վերջինս դրանք նշում է Առցանց խանութում, ուղարկում է էլեկտրոնային փոստով կամ տեղեկացնում անձամբ: Անձնական տվյալների պաշտպանության մասին գործող օրենսդրության համաձայն՝ Օգտատերը կարող է ցանկացած ժամանակ պահանջել փոփոխել, թարմացնել կամ հեռացնել իր անձնական տվյալները:</p>

      <h2 className={styles.sectionTitle}>II. ՍԿԶԲՈՒՆՔՆԵՐ</h2>
      <p>Սույն քաղաքականությունը հիմնված է հետևյալ սկզբունքների վրա, մասնավորապես՝</p>
      
      <h3 className={styles.subsectionTitle}>1. Տվյալների որակը.</h3>
      <h4 className={styles.subsubsectionTitle}>1.1. Անձնական տվյալները պետք է՝</h4>
      <p>1.1.2. ձեռք բերվեն և մշակվեն արդար ու օրինական ճանապարհով,</p>
      <p>1.1.3. պահպանվեն հատուկ և օրինական նպատակների համար ու չօգտագործվեն այլ նպատակներով,</p>
      <p>1.1.4. լինեն համարժեք, համապատասխան և չգերազանցեն դրանց պահպանման նպատակների սահմանները,</p>
      <p>1.1.5. լինեն ճշգրիտ և անհրաժեշտության դեպքում պահվեն թարմացված վիճակում,</p>
      <p>1.1.6. պահպանվեն այնպիսի եղանակով, որը թույլ է տալիս նույնականացնել տվյալների սուբյեկտներին` ոչ ավելին, քան անհրաժեշտ է այդ տվյալների պահպանման նպատակներով:</p>
      
      <h3 className={styles.subsectionTitle}>2. Տվյալների անվտանգությունը.</h3>
      <h4 className={styles.subsubsectionTitle}>2.1. Համապատասխան անվտանգության միջոցներ պետք է ձեռնարկվեն Ընկերության մոտ պահվող անձնական տվյալները պատահական կամ չթույլատրված ոչնչացումից կամ պատահական կորստից, ինչպես նաև չթույլատրված մուտքից, փոփոխումից կամ տարածումից պաշտպանելու համար:</h4>
      
      <h3 className={styles.subsectionTitle}>3. Տվյալների սուբյեկտների լրացուցիչ երաշխիքները.</h3>
      <h4 className={styles.subsubsectionTitle}>3.1. Օգտատերը պետք է հնարավորություն ունենա`</h4>
      <p>3.1.1. պարզելու անձնական տվյալների ավտոմատացված ֆայլի գոյությունը, դրա հիմնական նպատակները, ինչպես նաև ֆայլի վերահսկիչի ինքնությունը, բնակության և աշխատանքի հիմնական վայրերը,</p>
      <p>3.1.2. ողջամիտ պարբերականությամբ և առանց ավելորդ հետաձգման կամ ծախսի ստանալու հաստատում, թե արդյոք իրեն առնչվող անձնական տվյալները պահպանվում են ավտոմատացված տվյալների ֆայլում, ինչպես նաև ստանալու այդ տվյալները իր համար մատչելի ձևով,</p>
      <p>3.1.3. անհրաժեշտության դեպքում հասնելու այդ տվյալների ուղղմանը կամ ոչնչացմանը, եթե դրանք մշակվել են օրենքով սահմանված դրույթների խախտմամբ,</p>
      <p>3.1.4. օգտվելու իրավական պաշտպանությունից այն դեպքերում, երբ հաստատման հարցումը կամ, կախված հանգամանքներից, սույն կետի 2-րդ և 3-րդ պարբերություններում նշված տվյալների ստանալը, ուղղումը կամ ոչնչացումը չեն կատարվել:</p>

      <h2 className={styles.sectionTitle}>III. ԿԻՐԱՌԵԼԻ ՕՐԵՆՍԴՐՈՒԹՅՈՒՆՆ ՈՒ ՍՏԱՆԴԱՐՏՆԵՐԸ</h2>
      <p>Սույն քաղաքականությունը հիմնված և կազմված է ներքոշարադրյալ օրենսդրությանն ու ստանդարտներին համապատասխան, մասնավորապես՝</p>
      <p>1. «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենք,</p>
      <p>2. «Սպառողների իրավունքների պաշտպանության մասին» ՀՀ օրենք,</p>
      <p>3. «Ծխախոտային արտադրանքի օգտագործման, վաճառքի և սպառման սահմանափակումների մասին» ՀՀ օրենք,</p>
      <p>4. ՀՀ քաղաքացիական օրենսգիրք,</p>
      <p>5. Google Play հարթակի մշակողների ծրագրի քաղաքականություններ, այդ թվում՝ Տվյալների անվտանգություն,</p>
      <p>6. Apple App Store հարթակում հավելվածների ստուգման ուղեցույցներ, Գաղտնիության սննդային պիտակներ,</p>
      <p>7. Միջազգային լավագույն պրակտիկա (GDPR սկզբունքներ)։</p>

      <h2 className={styles.sectionTitle}>IV. ՀԻՄՆԱԿԱՆ ՀԱՍԿԱՑՈՒԹՅՈՒՆՆԵՐ</h2>
      <p>Սույն քաղաքականության մեջ օգտագործվող ներքոշարադրյալ հասկացություններն ունեն հետևյալ նշանակությունը, մասնավորապես՝</p>
      <p>ա) Անձնական տվյալներ - «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենքի իմաստով «անձնական տվյալ» հանդիսացող ցանկացած տեղեկատվություն և/կամ ցանկացած այլ տեղեկատվություն և/կամ տեղեկություն Օգտատիրոջ մասին, որը թույլ է տալիս կամ կարող է թույլ տալ ուղղակի կամ անուղղակի նույնականացնել անձը,</p>
      <p>բ) Անձնական տվյալների մշակում - ցանկացած գործողություն կամ գործողությունների ամբողջություն, որը կապված է անձնական տվյալների հավաքման, գրանցման, համակարգավորման, կազմակերպման, պահպանման, օգտագործման, փոփոխման, վերականգնման, փոխանցման, ուղղման, արգելափակման, ոչնչացման հետ և/կամ այլ գործողություններ անձնական տվյալների հետ, անկախ դրանց կատարման ձևից և մեթոդից (ներառյալ ավտոմատացված և/կամ ցանկացած տեխնիկական միջոցների կիրառման և/կամ մեխանիկական եղանակով),</p>
      <p>գ) Անձնական տվյալների փոխանցում երրորդ անձանց - գործողություն, որը ուղղված է անձնական տվյալների փոխանցմանը երրորդ կամ որոշակի կամ անորոշ անձանց շրջանակի ծանոթացմանը դրանց հետ, ներառյալ դրանց հրապարակումը միջոցառումներում, տեղադրումը տեղեկատվական հաղորդակցության ցանցերում կամ այլ անձանց անձնական տվյալներին մուտքի ապահովումը այլ միջոցներով,</p>
      <p>դ) Անձնական տվյալների օգտագործում - գործողություն, որը կատարվում է անձնական տվյալների հետ ուղղակի կամ անուղղակի նպատակով որոշումներ կայացնելու, կարծիք ձևավորելու, իրավունքներ ստանալու, արտոնություններ տրամադրելու, իրավունքներ սահմանափակելու կամ զրկելու, որը հանգեցնում է կամ կարող է հանգեցնել իրավական հետևանքների տվյալների սուբյեկտի կամ երրորդ անձանց համար կամ այլ կերպ ազդում է նրանց իրավունքների և ազատությունների վրա,</p>
      <p>ե) Անձնական տվյալների ոչնչացում - գործողություն, որի արդյունքում անհնար է վերականգնել տեղեկատվական համակարգում առկա անձնական տվյալների բովանդակությունը,</p>
      <p>զ) Օգտատեր - չափահաս ֆիզիկական անձ և/կամ իրավաբանական անձ և/կամ անհատ ձեռնարկատեր, ով մուտք է գործում www.overpack.am կայքէջ և/կամ օգտագործում է Overpack բջջային հավելվածը:</p>
      <p>է) Անձնական տվյալների պաշտպանություն - տեխնիկական, կազմակերպական և կազմակերպական-տեխնիկական միջոցառումների համալիր, որն ուղղված է որոշակի կամ որոշելի անձնական տվյալների սուբյեկտին վերաբերող տեղեկությունների պաշտպանությանը:</p>
      <p>ը) կայք - https://www.overpack.am հասցեում գտնվող «www.overpack.am» կայքը,</p>
      <p>թ) բջջային հավելված - App Store և/կամ Google Play հարթակում գտնվող «Overpack» բջջային հավելվածը։</p>

      <h2 className={styles.sectionTitle}>V. ՏԱՐԻՔԱՅԻՆ սահմանափակումներ</h2>
      <p>Հավելվածի միջոցով «Ծխախոտային արտադրանքի օգտագործման, վաճառքի և սպառման սահմանափակումների մասին» ՀՀ օրենքի իմաստով ծխախոտային արտադրանք ձեռք բերող ֆիզիկական անձինք ծխախոտային արտադրանքը ձեռք բերելու պահին պետք է լինեն 18 և ավելի տարեկան:</p>
      <p>Հավելվածից օգտվող ֆիզիկական անձ Օգտատերն պատասխանատու է նշված տարիքի ճշտության համար, քանի որ Ա/Ձ-ն չի կատարում ֆիզիկական անձանց տարիքի լրացուցիչ ստուգում։</p>
      <p>Ա/Ձ-ն պատասխանատվություն չի կրում ֆիզիկական անձ Օգտատիրոջ կողմից ոչ հավաստի և/կամ թերի և/կամ սխալ և/կամ դիտավորյալ խեղաթյուրված տեղեկությունների, այդ թվում՝ Օգտատեր ֆիզիկական անձի տարիքի վերաբերյալ, պատճառով վրա հասած հետևանքների համար։</p>
      <p>Ա/Ձ-ն ուղղակի և/կամ անուղղակի եղանակով չի հավաքում տվյալներ անչափահասներից:</p>

      <h2 className={styles.sectionTitle}>VI. ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ, ՈՐՈՆՔ ՍՏԱՆՈՒՄ ԵՎ ՄՇԱԿՈՒՄ Է Ա/Ձ-Ն</h2>
      <p>Օգտատիրոջ կողմից Overpack բջջային հավելվածից օգտվելիս վերջինս Ա/Ձ-ին տրամադրում է հետևյալ անձնական տվյալները, մասնավորապես՝</p>
      
      <h3 className={styles.subsectionTitle}>Ֆիզիկական անձանց դեպքում՝</h3>
      <p>անուն, ազգանուն,</p>
      <p>հեռախոսահամար,</p>
      <p>հասցե,</p>
      <p>էլեկտրոնային փոստի հասցե,</p>
      <p>ծննդյան ամսաթիվը,</p>
      <p>բանկային ռեկվիզիտները,</p>
      <p>բջջային հավելվածում Օգտատիրոջ կատարած գնումների պատմությունը,</p>
      <p>բջջային հավելվածում Օգտատիրոջ նախընտրած ապրանքների ցանկը,</p>
      <p>առաքման հասցեները և առաքման համար Օգտատիրոջ կողմից տրամադրված այլ տեղեկատվությունը,</p>
      <p>Օգտատիրոջ էլեկտրոնային և այլ նամակագրությունը Ա/Ձ-ի, Ա/Ձ-ի աշխատողների և Օգտատիրոջ պատվերի ձևակերպման և կատարման հետ առնչվող այլ անձանց միջև,</p>
      <p>այլ ցանկացած տեղեկատվություն, որն անհրաժեշտ է Օգտատիրոջ պատվերի ձևակերպման և կատարման համար:</p>
      
      <h3 className={styles.subsectionTitle}>Իրավաբանական անձանց դեպքում՝</h3>
      <p>իրավաբանական անձի անվանումը,</p>
      <p>ՀՎՀՀ</p>
      <p>հեռախոսահամար,</p>
      <p>հասցե,</p>
      <p>էլեկտրոնային փոստի հասցե,</p>
      <p>բանկային ռեկվիզիտները,</p>
      <p>բջջային հավելվածում Օգտատիրոջ կատարած գնումների պատմությունը,</p>
      <p>բջջային հավելվածում Օգտատիրոջ նախընտրած ապրանքների ցանկը,</p>
      <p>առաքման հասցեները և առաքման համար Օգտատիրոջ կողմից տրամադրված այլ տեղեկատվությունը,</p>
      <p>Օգտատիրոջ էլեկտրոնային և այլ նամակագրությունը Ա/Ձ-ի, Ա/Ձ-ի աշխատողների և Օգտատիրոջ պատվերի ձևակերպման և կատարման հետ առնչվող այլ անձանց միջև,</p>
      <p>իրավաբանական անձի գործադիր և/կամ ղեկավար մարմնի և/կամ այդ իրավաբանական անձի աշխատողի կամ աշխատողների անուն, ազգանունը, անձնագրի և/կամ նույնականացման քարտի տվյալները, հեռախոսահամար, հասցե, էլեկտրոնային փոստի հասցե,</p>
      <p>այլ ցանկացած տեղեկատվություն, որն անհրաժեշտ է Օգտատիրոջ պատվերի ձևակերպման և կատարման համար:</p>
      
      <p>Օգտատիրոջ կողմից Overpack բջջային հավելվածից օգտվելիս վերջինս Ա/Ձ-ին տրամադրում է ավտոմատ հավաքվող հետևյալ տվյալները, մասնավորապես՝ տվյալները, որոնք ավտոմատ կերպով փոխանցվում են Ա/Ձ-ին բջջային հավելվածից օգտվելու ընթացքում, Օգտատիրոջ սարքի (բջջային հեռախոս, համակարգիչ և այլն) վրա տեղադրված ծրագրային ապահովման միջոցով, դրանք են՝</p>
      <p>Օգտատիրոջ կողմից բջջային հավելվածում կատարված գործողությունները, այցելության ժամանակահատվածը,</p>
      <p>սարքի տվյալները՝ օպերացիոն համակարգը, մոդելը</p>
      <p>բրաուզերի տեսակը,</p>
      <p>սարքի տեսակը,</p>
      <p>IP հասցեն,</p>
      <p>սխալների գրանցամատյաններ, սխալների ախտորոշում,</p>
      <p>cookie-ների այլ տվյալներ:</p>
      
      <p>Օգտատիրոջ կողմից Overpack բջջային հավելվածից օգտվելիս վերջինս Ա/Ձ-ին տրամադրում է երրորդ անձանց հետևյալ տվյալները, մասնավորապես՝</p>
      <p>վճարային պրոցեսորներ, գործարքի կարգավիճակ,</p>
      <p>առաքման մատակարարներ, պատվերի կարգավիճակ, ստացման հաստատում։</p>

      <h2 className={styles.sectionTitle}>VII. ՕԳՏԱՏԻՐՈՋ ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐԻ ՀԱՎԱՔՄԱՆ ԵՎ ՄՇԱԿՄԱՆ ՆՊԱՏԱԿՆԵՐԸ</h2>
      <p>Ա/Ձ-ն հավաքում և պահպանում է միայն այն անձնական տվյալները, որոնք անհրաժեշտ են ծառայությունների մատուցման և/կամ Օգտատիրոջ հետ կնքված պայմանագրերի կատարման համար:</p>
      <p>Ա/Ձ-ն օգտագործում է Օգտատիրոջ անձնական տվյալները հետևյալ նպատակներով, մասնավորապես՝</p>
      <p>Օգտատիրոջ նույնականացում,</p>
      <p>Օգտատիրոջը ծառայությունների անհատականացված ռեսուրսների հասանելիության տրամադրում,</p>
      <p>Օգտատիրոջ հետ հետադարձ կապի հաստատում, ներառյալ բջջային հավելվածի օգտագործման հետ կապված ծանուցումների, հարցումների ուղղում, Օգտատիրոջ կողմից ուղարկված հարցումների և հայտերի մշակում, պատվերների առաքում,</p>
      <p>Օգտատիրոջ հետ պայմանագրերի կնքում, կատարում և պատվերների ձևակերպում,</p>
      <p>Օգտատիրոջ կողմից տրամադրված անձնական տվյալների հավաստիության և ամբողջականության հաստատում,</p>
      <p>Բջջային հավելվածի օգտագործման հետ կապված խնդիրների առաջացման դեպքում Օգտատիրոջը արդյունավետ տեխնիկական աջակցության տրամադրում,</p>
      <p>Օգտատիրոջ համաձայնությամբ վերջինիս գովազդային հաղորդագրությունների ուղարկում,</p>
      <p>Բջջային հավելվածի աշխատանքի որակի բարելավում, դրանց օգտագործման հարմարավետություն, նոր ծառայությունների մշակում,</p>
      <p>խարդախության հայտնաբերման և անվտանգության համար,</p>
      <p>մարքեթինգի համար (բացահայտ համաձայնության դեպքում),</p>
      <p>այլ նպատակներով, որոնք կարող են նախատեսվել Կողմերի միջև կնքված պայմանագրով, ինչպես նաև ՀՀ օրենսդրությամբ:</p>

      <h2 className={styles.sectionTitle}>VIII. ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐԻ ՄՇԱԿՄԱՆ ԵՎ ԵՐՐՈՐԴ ԱՆՁԱՆՑ ՓՈԽԱՆՑՄԱՆ ՊԱՅՄԱՆՆԵՐԸ</h2>
      <p>Օգտատերերի անձնական տվյալների մշակումն իրականացվում է «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենքին համապատասխան:</p>
      <p>Օգտատիրոջ անձնական տվյալների մշակումն իրականացվում է առանց ժամկետի սահմանափակման, ցանկացած օրինական եղանակով, այդ թվում` անձնական տվյալների տեղեկատվական համակարգերում` ավտոմատացման միջոցների օգտագործմամբ կամ առանց նման միջոցների օգտագործման:</p>
      <p>Օգտատիրոջ ամբողջ անձնական տվյալների նկատմամբ պահպանվում է գաղտնիությունը և ապահովվում անվտանգությունը:</p>
      <p>Ա/Ձ-ն իրավունք ունի Օգտատիրոջ անձնական տվյալները փոխանցել երրորդ անձանց` այդ թվում սուրհանդակային և փոստային կապի և առաքման ծառայություններ մատուցողներին և այլ անձանց, հետևյալ դեպքերում`</p>
      <p>Օգտատերը նման գործողությունների կատարման համար տվել է իր համաձայնությունը,</p>
      <p>փոխանցումն անհրաժեշտ է Օգտատիրոջ կողմից բջջային հավելվածից օգտվելու կամ Օգտատիրոջ հետ կնքված պայմանագրի կատարման համար,</p>
      <p>Ա/Ձ-ի իրավունքների և օրինական շահերի պաշտպանությունն ապահովելու նպատակով,</p>
      <p>օրենքով սահմանված այլ դեպքերում:</p>
      
      <p>Բջջային հավելվածը կարող է պարունակել հղումներ այլ կայքերի, որոնք չեն կառավարվում Ա/Ձ-ի կողմից: Եթե Օգտատերն անցնում է հղումով, ապա նա հայտնվում է երրորդ անձին պատկանող կայքում: Ա/Ձ-ն խորհուրդ է տալիս Օգտատիրոջը յուրաքանչյուր կայքում, որը նա այցելում է, առանձին ծանոթանալ տվյալ կայքի գաղտնիության քաղաքականությանը: Ա/Ձ-ն չունի վերահսկողություն և չի ստանձնում պատասխանատվություն երրորդ անձանց կայքերի և/կամ դրանց պայմանների բովանդակության, գաղտնիության քաղաքականության կամ գործողությունների համար:</p>
      
      <p>Սույն քաղաքականության իմաստով երրորդ անձինք են հանդիսանում՝</p>
      <p>- վճարային համակարգերի պատասխանատուները (օրինակ՝ «Ամերիաբանկ» ՓԲԸ-ի Ameriabank համակարգը),</p>
      <p>- առաքման և/կամ մատակարարում իրականացնող անձինք (լիցենզավորված փոխադրումներ իրականացնող անձինք (առաքիչներ)),</p>
      <p>- պետական և/կամ տեղական ինքնակառավարման մարմինները (անկախ դրանց կազմակերպաիրավական ձևից և առանց որևէ բացառության), օրենքով սահմանված դեպքերում։</p>
      <p>Սույն պարբերությունում թվարկված երրորդ անձանց ցանկը սպառիչ չէ և որևէ դեպքում այն չի կարող մեկնաբանվել այնպես, որ վերջինս բացառում է անձնական տվյալներն այլ անձանց փոխանցելու հնարավորությունը։</p>
      
      <p>Ա/Ձ-ն երաշխավորում է, որ Օգտատերերի անձնական տվյալների բացահայտումը և/կամ երրորդ անձանց փոխանցումն իրականացվում է բացառապես սույն քաղաքականության մեջ նշված նպատակների համար։</p>
      <p>Ա/Ձ-ն երաշխավորում է, որ Օգտատերերի անձնական տվյալների բացահայտումը և/կամ երրորդ անձանց փոխանցումը չի իրականացնում և չի իրականացնելու շահույթ ստանալու նպատակով, օրինակ՝ Ա/Ձ-ն երբեք չի իրականացնում և երբեք չի իրականացնելու անձնական տվյալների վաճառք։</p>
      
      <p>Օգտատերերի անձնական տվյալները պահպանվում են Հայաստանի Հանրապետությունում: Հայաստանի Հանրապետության տարածքից դուրս անձնական տվյալների մշակման դեպքում դրանց նկատմամբ կիրառելի են Ստանդարտ պայմանագրային դրույթները կամ դրանց համարժեք երաշխիքները:</p>

      <h2 className={styles.sectionTitle}>IX. ՕԳՏԱՏԻՐՈՋ ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐԻ ՊԱՇՏՊԱՆՈՒԹՅԱՆ ՀԱՄԱՐ ԿԻՐԱՌՎՈՂ ՄԻՋՈՑՆԵՐԸ</h2>
      <p>Անձնական տվյալների մշակման ժամանակ Ա/Ձ-ն ձեռնարկում է անհրաժեշտ իրավական, կազմակերպական և տեխնիկական միջոցներ անձնական տվյալների պաշտպանության համար, մասնավորապես՝ ոչ իրավաչափ կամ պատահական հասանելիությունից, ոչնչացումից, փոփոխությունից, արգելափակումից, կրկնօրինակումից, անձնական տվյալների տրամադրումից, տարածումից, ինչպես նաև Օգտատիրոջ անձնական տվյալների նկատմամբ այլ ոչ իրավաչափ գործողություններից՝ համաձայն անձնական տվյալների պաշտպանության վերաբերյալ օրենսդրության պահանջների:</p>
      
      <p>Ա/Ձ-ն Օգտատերերի անձնական տվյալները պահպանում է հետևյալ ժամկետներում, մասնավորապես՝</p>
      <p>- Օգտատիրոջ հաշվի տվյալները՝ բջջային հավելվածում Օգտատիրոջ գրանցումից մինչև Օգտատիրոջ կողմից և/կամ Ա/Ձ-ի կողմից Օգտատիրոջ հաշվի փակումը և/կամ ջնջումը,</p>
      <p>- Ա/Ձ-ի և Օգտատիրոջ միջև կնքված գործարքի տվյալները՝ առանձին գործարքի և/կամ գործարքների և/կամ պայմանագրի կնքման պահից մինչև 5 տարի ժամկետով և/կամ օրենսդրությամբ նման տվյալների պահպանության համար նախատեսված ժամկետների ավարտը։</p>

      <h2 className={styles.sectionTitle}>X. ԿՈՂՄԵՐԻ ԻՐԱՎՈՒՆՔՆԵՐԸ ԵՎ ՊԱՐՏԱԿԱՆՈՒԹՅՈՒՆՆԵՐԸ</h2>
      <p>Օգտատերն իրավունք ունի, մասնավորապես՝</p>
      <p>- «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենքով սահմանված կարգով և ծավալներով ստանալ իր անձնական տվյալների մշակման վերաբերյալ տեղեկատվություն,</p>
      <p>- Ա/Ձ-ից պահանջել անձնական տվյալների հստակեցում, արգելափակում կամ ոչնչացում այն դեպքում, երբ անձնական տվյալները թերի են, հնացած, պարունակում են անճշտություններ, ձեռք են բերվել և օգտագործվում են հայտարարված նպատակների և օրենսդրությամբ սահմանված պահանջների խախտումներով,</p>
      <p>- հետ կանչել անձնական տվյալների մշակման համար տրված համաձայնությունը: Օգտատերը պետք է հաշվի առնի, որ անձնական տվյալների տրամադրումից հրաժարվելը, անձնական տվյալների մշակման համար Ա/Ձ-ին համաձայնություն տրամադրելուց հրաժարվելը կամ նախկինում տրված համաձայնությունը հետ կանչելը կարող են հանգեցնել Օգտատիրոջ նկատմամբ Ա/Ձ-ի ունեցած պարտավորությունների հետագա կատարման անհնարինությանը:</p>
      <p>- հարցման դեպքում ստանալ անձնական տվյալների պատճենը,</p>
      <p>- սույն կետում նախատեսված իր իրավունքներն իրացնել համապատասխան հարցումը և/կամ դիմումը և/կամ պահանջը հասցեագրելով Ա/Ձ-ի overpackhookahmarket@gmail.com էլեկտրոնային փոստի հասցեին,</p>
      <p>- օրենսդրությամբ նախատեսված այլ իրավունքներ։</p>
      
      <p>Օգտատերը պարտավոր է, մասնավորապես՝</p>
      <p>- Ա/Ձ-ին տրամադրել բջջային հավելվածից օգտվելու համար անհրաժեշտ հավաստի տեղեկատվություն,</p>
      <p>- նախքան բջջային հավելվածի միջոցով հերթական գործարքի կատարումը, Ա/Ձ-ին տեղեկացնել իր անձնական այն տվյալների փոփոխության մասին, որոնք անհրաժեշտ են այդ գործարքի և/կամ Օգտատիրոջը ծառայության մատուցման համար,</p>
      <p>- օրենսդրությամբ նախատեսված այլ պարտավորություններ:</p>
      
      <p>Ա/Ձ-ն իրավունք ունի, մասնավորապես՝</p>
      <p>- իրականացնել Ա/Ձ-ի կողմից օրինական ճանապարհով ստացված անձնական տվյալների մշակում՝ սույն քաղաքականությամբ սահմանված նպատակների համար,</p>
      <p>- սահմանափակել Օգտատիրոջ հասանելիությունը իր անձնական տվյալներին այն դեպքում, եթե հասանելիությունը խախտում է երրորդ անձանց իրավունքներն ու օրինական շահերը,</p>
      <p>- օրենսդրությամբ նախատեսված այլ իրավունքներ:</p>
      
      <p>Ա/Ձ-ն պարտավոր է, մասնավորապես՝</p>
      <p>- Օգտատիրոջ պահանջով նրան տրամադրել «Անձնական տվյալների պաշտպանության մասին» ՀՀ օրենքով նախատեսված տեղեկատվությունը,</p>
      <p>- ոչ ամբողջական, ոչ ճշգրիտ, հնացած, անօրինական ճանապարհով ձեռք բերված կամ մշակման նպատակներին հասնելու համար ոչ անհրաժեշտ անձնական տվյալների դեպքում իրականացնել անհրաժեշտ գործողություններ դրանք ամբողջականացնելու, թարմացնելու, ուղղելու կամ ոչնչացնելու ուղղությամբ,</p>
      <p>- օգտագործել ստացված անձնական տվյալները բացառապես Գաղտնիության քաղաքականության մեջ նշված նպատակներով,</p>
      <p>- ապահովել Օգտատիրոջ անձնական տվյալների գաղտնիությունը,</p>
      <p>- կատարել մշակման վերաբերյալ Գաղտնիության քաղաքականությամբ և ՀՀ օրենսդրությամբ նախատեսված այլ պարտականություններ,</p>
      <p>- Օգտատիրոջ կողմից Ա/Ձ-ի overpackhookahmarket@gmail.com էլեկտրոնային փոստի հասցեին ուղարկված հարցմանը և/կամ դիմումին և/կամ պահանջին պատասխանել այն ստանալուց հետո առավելագույնը մինչև 30 օրվա ընթացքում,</p>
      <p>- օրենսդրությամբ նախատեսված այլ պարտավորություններ։</p>

      <h2 className={styles.sectionTitle}>XI. ՎԵՃԵՐԻ ԼՈՒԾՄԱՆ ԿԱՐԳԸ</h2>
      <p>Սույն գաղտնիության քաղաքականության կապակցությամբ ծագած ցանկացած վեճ լուծվում է բանակցությունների միջոցով:</p>
      <p>Կողմերը փոխադարձ համաձայնությամբ Գաղտնիության քաղաքականությունից բխող վեճերի լուծման եղանակ են սահմանում նախապահանջային եղանակը:</p>
      <p>Խախտում վկայակոչող կողմը ենթադրյալ խախտում թույլ տված կողմին խախտման վերաբերյալ ներկայացնում է գրավոր նախապահանջ: Նախապահանջը ստանալու պահից 30 օրվա ընթացքում դրա վերաբերյալ պատասխան չստացվելու կամ ներկայացված պահանջը մերժվելու դեպքում վեճը կարող է հանձնվել Հայաստանի Հանրապետության իրավասու դատարանի քննությանը:</p>
      <p>Գաղտնիության քաղաքականության նկատմամբ կիրառելի իրավունք է հանդիսանում ՀՀ օրենսդրությունը:</p>

      <h2 className={styles.sectionTitle}>XII. ԱՅԼ ԴՐՈՒՅԹՆԵՐ</h2>
      <p>Գաղտնիության քաղաքականությունն ուժի մեջ է մտնում Օգտատիրոջ կողմից բջջային հավելվածում գրանցման և/կամ մուտք գործելու պահից և հանդիսանում է Ա/Ձ-ին պատկանող բջջային հավելվածից օգտվելու վերաբերյալ օգտագործման համաձայնագրի անբաժանելի մասը: Գրանցվելով և/կամ մուտք գործելով բջջային հավելված՝ Օգտատերն հավաստում է, որ ամբողջությամբ ծանոթացել է Գաղտնիության քաղաքականության բովանդակությանը և որևէ առարկություն չունի դրա վերաբերյալ:</p>
      <p>Ա/Ձ-ն իրավունք ունի ցանկացած պահի միակողմանի փոփոխել Գաղտնիության քաղաքականությունը: Գաղտնիության քաղաքականության նոր խմբագրությունն ուժի մեջ է մտնում Ա/Ձ-ի կողմից այն բջջային հավելվածում և/կամ կայքում և/կամ Առցանց խանութում տեղադրելու պահից, եթե այլ բան նախատեսված չէ Գաղտնիության քաղաքականության նոր խմբագրությամբ: Յուրաքանչյուր պատվեր բջջային հավելվածի միջոցով ձևակերպելիս՝ Օգտատերն հավաստում է, որ ծանոթացել և համաձայն է տվյալ պահին բջջային հավելվածում առկա Գաղտնիության քաղաքականության խմբագրությանը:</p>
      <p>Գաղտնիության քաղաքականության որևէ մասի գործողության դադարեցումը, չեղյալ հայտարարելը կամ անվավերությունը չի հանգեցնում մյուս մասերի դադարեցմանը, չեղյալ հայտարարելուն կամ անվավերությանը:</p>
      <p>Գաղտնիության քաղաքականությունը կազմված է հայերենով, ռուսերենով և անգլերենով և պարտադիր է Կողմերի համար։ Հայերեն, ռուսերեն և անգլերեն տեքստերի միջև տարընթերցումների դեպքում առավելությունը տրվում է Գաղտնիության քաղաքականության հայերեն տարբերակին:</p>

      <h2 className={styles.sectionTitle}>XIII. ԾՆԱԽՈՏԻ ՄԱՍԻՆ ԻՐԱՎԱԿԱՆ ՆՇՈՒՄՆԵՐ</h2>
      <p>• Հավելվածը չի գովազդում և չի խրախուսում նարգիլեի օգտագործումը։</p>
      <p>• Չեն արվում որևէ հայտարարություններ, որոնք կարող են մատնանշել սոցիալական, հոգեբանական կամ առողջական օգուտներ։</p>
      <p>• Համաձայն Հայաստանի Հանրապետության օրենսդրության՝</p>
      <p>«Ծխելը վնասակար է առողջության համար։ Այս արտադրանքը նախատեսված է միայն չափահասների (18+) համար»։</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wordSection}>
          {params.lang === 'hy' ? <HYContent /> : 
           params.lang === 'en' ? <ENContent /> : 
           params.lang === 'ru' ? <ENContent /> : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h1>{titles[params.lang]}</h1>
              <p>Content coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}