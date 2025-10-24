import { Locale } from "@/i18n-config";
import styles from "./terms-of-use.module.scss";

export default function TermsOfUsePage({ params }: { params: { lang: Locale } }) {
  const titles = {
    en: "Terms of Use",
    hy: "Օգտագործման պայմաններ",
    ru: "Условия использования"
  };

  const ENContent = () => (
    <div className={styles.termsContent}>
      <h1 className={styles.title}>
        TERMS OF USE OF THE OVERPACK AND/OR MOBILE APPLICATION OF THE PRIVATE ENTREPRENEUR &ldquo;GAGIK BAGHDASARYAN GRIGOR&rdquo;
      </h1>
      
      <div className={styles.dates}>
        <p>Effective Date: January 15, 2025</p>
        <p>Last Updated: January 15, 2025</p>
      </div>

      <p>This User Agreement is concluded between the private entrepreneur &ldquo;Gagik Baghdasaryan Grigor&rdquo; (TIN - 28345959, address: Republic of Armenia, 0048, Yerevan city, Norashen Street, Building No. 11, Apartment No. 54) (hereinafter also referred to as &ldquo;Overpack&rdquo; or &ldquo;Private Entrepreneur&rdquo; or &ldquo;Mobile Application&rdquo;) and the user (hereinafter also referred to as the &ldquo;User&rdquo;) of the website www.overpack.am and/or the Overpack mobile application (in case of joint naming of the website and the mobile application also referred to as the &ldquo;Online Store&rdquo; or &ldquo;Mobile Application&rdquo;), owned by the Private Entrepreneur (hereinafter also referred to as the &ldquo;Parties&rdquo;) and determines the terms and procedure for the purchase of goods by the User through the mobile application (hereinafter also referred to as the &ldquo;User Agreement&rdquo;).</p>

      <h2 className={styles.sectionTitle}>I. BASIC CONCEPTS</h2>
      
      <p><strong>1. In this Agreement, the following terms have, among other things, the following meanings:</strong></p>
      <p>a) Online Store or Mobile Application – the Overpack mobile application, hosted in the App Store and/or Google Play, owned by the Private Entrepreneur and containing a range of products offered by the Private Entrepreneur for online ordering, as well as terms of delivery, payment, returns, and other conditions.</p>
      <p>b) Website: The website &ldquo;www.overpack.am,&rdquo; located at https://www.overpack.am, owned by the Private Entrepreneur and providing information about the Private Entrepreneur, the services it provides, and the Overpack mobile app available on the App Store and/or Google Play.</p>
      <p>c) Product: Any product available for order by the User in the Online Store, presented in the Online Store.</p>
      <p>d) User: An adult individual and/or legal entity who has access to the Online Store via the internet and uses the Online Store.</p>
      <p>e) Order: A User&apos;s request to purchase a Product listed in the Online Store and/or Mobile App, which complies with the Mobile App&apos;s usage requirements.</p>
      <p>f) Sender: An individual and/or sole proprietor and/or their employee, acting on behalf of a legal entity, delivering the Product specified in the User&apos;s Order to the User or a person specified by them.</p>

      <h2 className={styles.sectionTitle}>II. GENERAL PROVISIONS</h2>
      
      <p><strong>2.1.</strong> This Agreement is deemed entered into by the User upon registration with the Online Store. By ordering a Product or Products through the Online Store, the User agrees to the terms of sale for such Product or Products set forth in this Agreement.</p>
      
      <p><strong>2.2.</strong> The User is obligated to familiarize themselves with the terms of this Agreement prior to registering with the Online Store. If the User disagrees with the terms of this Agreement, they must refrain from using the Online Store.</p>
      
      <p><strong>2.3.</strong> The terms of sale of the Product stipulated by this Agreement, as well as the information about the Product provided in the Online Store, constitute a public offer.</p>
      
      <p><strong>2.4.</strong> By registering in the Online Store and/or Mobile App and agreeing to the terms of this Agreement, the User confirms that they are purchasing the Product solely for personal, family, household, or other needs not related to business activities, unless the User is a legal entity.</p>
      
      <p><strong>2.5.</strong> If the User is a legal entity, the requirement set forth in paragraph 2.4 of this Agreement does not apply.</p>
      
      <p><strong>2.6.</strong> The Product presented in the App, which is considered a tobacco product within the meaning of the RA Law &ldquo;On Restrictions on the Use, Sale, and Consumption of Tobacco Products,&rdquo; is sold by the Private Entrepreneur exclusively to Users who are individuals over 18 years of age.</p>
      
      <p><strong>2.7.</strong> If the User is an individual under 18 years of age, they are not eligible to purchase the Product presented in the App, which is considered a tobacco product within the meaning of the RA Law &ldquo;On Restrictions on the Use, Sale, and Consumption of Tobacco Products.&rdquo; The User, who is an individual, confirms that they are at least 18 years of age at the time of placing the Order.</p>

      <h2 className={styles.sectionTitle}>III. REGISTRATION, ORDER PLACEMENT, AND FULFILLMENT TIMES</h2>
      
      <p><strong>3.1.</strong> To place an Order through the Online Store, the User must first register with the Online Store.</p>
      
      <p><strong>3.2.</strong> When registering with the Online Store, in addition to other information required by the Individual, the User must provide the following information, specifically:</p>
      
      <p><strong>3.2.1.</strong> For the User who is an individual:</p>
      <p>- Phone number</p>
      <p>- Code sent by a private Entrepreneur via SMS</p>
      <p>- First name, last name</p>
      <p>- Date of birth</p>
      <p>- Email address</p>
      <p>- Gender</p>
      <p>- Address</p>
      
      <p><strong>3.2.2.</strong> For a legal entity User:</p>
      <p>- VAT number,</p>
      <p>- telephone number,</p>
      <p>- code sent by an individual in a short message (SMS),</p>
      <p>- first and last name of the authorized person,</p>
      <p>- identity document details,</p>
      <p>- email address,</p>
      <p>- address.</p>
      
      <p><strong>3.3.</strong> After registering, the User selects a Product in the Online Store and adds it to the cart specified in the Mobile App for placing the Order. The User can independently remove and add Products from the cart until the Order is confirmed.</p>
      
      <p><strong>3.4.</strong> Photos posted in the Online Store may differ slightly from the actual Product. Descriptions or specifications included with the Product are not exhaustive and may contain inaccuracies.</p>
      
      <p><strong>3.5.</strong> When selecting the desired Product and adding it to the cart, the User is required to provide a delivery address.</p>
      
      <p><strong>3.6.</strong> When placing an Order, the User is obligated to provide accurate and up-to-date information necessary for the Order&apos;s fulfillment. The private Entrepreneur is not responsible for the accuracy and currency of the information provided by the User, nor for any consequences arising therefrom.</p>
      
      <p><strong>3.7.</strong> After confirming the Order, the User may not change the Products specified in the Order.</p>
      
      <p><strong>3.8.</strong> When placing an order, in addition to any other information required by the Private Entrepreneur, the User must provide the following information:</p>
      <p>- delivery time,</p>
      <p>- full name of the order recipient, if the recipient is not the User,</p>
      <p>- additional phone number (if necessary),</p>
      <p>- payment method,</p>
      <p>- if paying by bonus card, the amount to be debited from the bonus card,</p>
      <p>- comments (if necessary).</p>
      
      <p><strong>3.9.</strong> The User is informed of the order confirmation stages, as well as the stages of pickup, delivery, on-site order processing, and order completion via push notifications sent by the Private Entrepreneur.</p>
      
      <p><strong>3.10.</strong> If the Product added to the cart is unavailable at the Private Entrepreneur&apos;s warehouse, the Private Entrepreneur will notify the User via the online store or by other means.</p>

      <h2 className={styles.sectionTitle}>IV. PAYMENT PROCEDURE</h2>
      
      <p><strong>4.1.</strong> The price of the Product in the online store is indicated in Armenian drams. For the User, the price of the Product indicated in the online store includes all taxes stipulated by the legislation of the Republic of Armenia.</p>
      
      <p><strong>4.2.</strong> The total cost of the Order is determined by the sum of the cost of all Products added to the Cart by the User, as well as the cost of the packaging used for their delivery and final packaging. The cost of packaging used for delivery and packaging of the ordered Products may also be specified in the Online Store.</p>
      
      <p><strong>4.3.</strong> The User can choose a delivery time, which may not exceed 1 day from the date of Order confirmation.</p>
      
      <p><strong>4.4.</strong> The sole proprietor reserves the right to unilaterally change the price of the Product until the User confirms the Order.</p>
      
      <p><strong>4.5.</strong> The User may pay for the Order by bank transfer through the payment system available in the Online Store.</p>
      
      <p><strong>4.6.</strong> The User has the right to link a bank card(s) to their personal page in the Online Store.</p>
      
      <p><strong>4.7.</strong> Payment terms are controlled by third-party banks and payment and settlement organizations with which the Private Entrepreneur cooperates.</p>
      
      <p><strong>4.8.</strong> By choosing a cashless payment method, the User confirms that they have read and agree to the terms and conditions of the third-party banks or payment and settlement organizations and has no objections or claims against the Private Entrepreneur regarding their terms and conditions.</p>
      
      <p><strong>4.9.</strong> When choosing a cashless payment method through a payment system available in the online store, the User is obligated to pay the full amount specified in the order. In the event of incomplete payment (insufficient amount or lack of funds), the order is not confirmed and will not be processed in the system. In this case, the User will not be charged.</p>

      <h2 className={styles.sectionTitle}>V. DELIVERY</h2>
      
      <p><strong>5.1.</strong> The Product will be delivered by courier service within the Republic of Armenia.</p>
      
      <p><strong>5.2.</strong> Delivery times depend on distance and traffic conditions.</p>
      
      <p><strong>5.3.</strong> The delivery cost is included in the total order price.</p>
      
      <p><strong>5.4.</strong> Upon receipt of the Product, the User is obligated to check the conformity of the delivered Product (quantity, quality, etc.) with the Order only in the presence of the courier.</p>

      <h2 className={styles.sectionTitle}>VI. ORDER CANCELLATION AND RETURN PROCEDURE</h2>
      
      <p><strong>6.1.</strong> The User has the right to refuse the ordered Product before receiving a push notification regarding delivery progress.</p>
      
      <p><strong>6.2.</strong> If the User refuses the delivered Goods, the Private Entrepreneur has the right to deduct the cost of delivery services from the funds transferred by the User. The amount paid by the User for the undelivered Goods will be refunded to the User within the timeframes specified in this Agreement.</p>
      
      <p><strong>6.3.</strong> If, upon receiving an Order, the User discovers a Product of inadequate quality or the received Product does not match the Order, the User has the right to request a replacement Product for one of proper quality or to refuse its acceptance and request a refund of the amount paid for the defective Product. The Sole Proprietor is obligated to replace the Product within one day of receiving the User&apos;s request. If, at the time of the request, the Sole Proprietor is unavailable for the replacement Product, the Sole Proprietor is obligated to notify the User within one day of the unavailability of the Product and refund the User the amount paid for the undelivered Product within the timeframes specified in this Agreement.</p>
      
      <p><strong>6.4.</strong> If a Product is covered by a warranty period, the User has the right to file claims related to defects in the Product if they are discovered during the warranty period.</p>
      
      <p><strong>6.5.</strong> Minor differences in the description, design, and/or appearance of the delivered Product from that presented in the online store do not indicate poor quality.</p>
      
      <p><strong>6.6.</strong> The User has no right to return purchased Products of proper quality, or Products that are not subject to return and/or replacement in accordance with the procedure established by the Government of the Republic of Armenia.</p>
      
      <p><strong>6.7.</strong> The User has the right to return to the Private Entrepreneur non-food Goods of proper quality within the timeframes established by law, or to replace them with Goods of a different size, shape, color, or similar completeness, making the necessary recalculation with the Private Entrepreneur in the event of a price difference.</p>
      
      <p><strong>6.8.</strong> Goods of proper quality are not subject to return:</p>
      <p>- if the Goods were manufactured and delivered in accordance with the User&apos;s specific requirements, or if the Goods are personalized,</p>
      <p>- if the Goods delivered are subject to rapid deterioration, degradation, or change in quality,</p>
      <p>- In the case of the sale of sealed Goods that are not subject to return for reasons of hygiene or sanitation, and which were unsealed by the buyer after delivery,</p>
      <p>- In the case of the sale of Goods that, by their nature, remain inseparably connected after delivery.</p>
      
      <p><strong>6.9.</strong> The User&apos;s request for the return or replacement of the Product is satisfied if the Product has not been used, its consumer properties are preserved, and there is evidence of the purchase of the Product from a Private Entrepreneur.</p>
      
      <p><strong>6.10.</strong> The User is responsible for the costs associated with the return or replacement of non-food Products of proper quality.</p>
      
      <p><strong>6.11.</strong> In cases provided for in this Agreement, requests for a refund of the amount paid for the Product must be satisfied within 15 days from the date of the request.</p>
      
      <p><strong>6.12.</strong> A sole proprietor reserves the right to refuse an Order through the Online Store if the User&apos;s previously placed Orders were not received due to their fault (for example, failure to answer the door, failure to answer the courier&apos;s calls upon delivery, providing a non-existent delivery address, etc.).</p>

      <h2 className={styles.sectionTitle}>VII. RIGHTS AND OBLIGATIONS OF THE PARTIES</h2>
      
      <p><strong>7.1.</strong> The private Entrepreneur has the right, in particular:</p>
      <p>- in the event of a User&apos;s violation of the terms of this Agreement, to restrict or prohibit their access to the Online Store,</p>
      <p>- to demand that the User pay the established amount for the delivered and accepted goods,</p>
      <p>- Suspend and/or terminate and/or delete User accounts for violation of this Agreement and/or the requirements of the Privacy Policy and/or other mandatory requirements stipulated by law,</p>
      <p>- exercise other rights arising from the legislation of the Republic of Armenia and the User Agreement,</p>
      
      <p><strong>7.2.</strong> The private Entrepreneur is obligated, in particular:</p>
      <p>- to ensure the confidentiality of the User&apos;s personal data in accordance with the terms of the &ldquo;Privacy Policy&rdquo; posted on the Online Store,</p>
      <p>- to fulfill other obligations arising from the legislation of the Republic of Armenia and the User Agreement.</p>
      
      <p><strong>7.3.</strong> The user has the right, in particular:</p>
      <p>- After registering with the Online Store, you will be granted access to its use,</p>
      <p>- use all services available in the Online Store, as well as purchase or decline to purchase any product offered in the Online Store,</p>
      <p>- ask any questions regarding the services provided by the Private Entrepreneur through the Online Store, using any means of communication available in the Online Store,</p>
      <p>- use the Online Store solely for the purposes and in the manner stipulated by the User Agreement and not prohibited by the legislation of the Republic of Armenia,</p>
      <p>- delete accounts at any time without causing damage to the Private Entrepreneur,</p>
      <p>- exercise other rights arising from the legislation of the Republic of Armenia and this agreement.</p>
      
      <p><strong>7.4.</strong> The User undertakes, in particular:</p>
      <p>- to pay for the delivered goods in the manner prescribed by this Agreement,</p>
      <p>- to provide additional information directly related to the services provided by the Online Store,</p>
      <p>- to respect the property and non-property rights of authors and other copyright holders when using the Online Store,</p>
      <p>- to refrain from actions that may affect the normal operation of the Online Store,</p>
      <p>- to refrain from disseminating confidential information related to individuals and/or legal entities and protected by the legislation of the Republic of Armenia through the Online Store,</p>
      <p>- Avoid actions that violate the confidentiality of information protected by the legislation of the Republic of Armenia,</p>
      <p>- fulfill other obligations arising from the legislation of the Republic of Armenia and this Agreement.</p>
      
      <p><strong>7.5.</strong> The User has no right, in particular:</p>
      <p>- Place an Order on behalf of minors,</p>
      <p>- Illegally purchase Products if the User is an individual,</p>
      <p>- Use the Mobile App in any illegal or malicious manner, or disrupt the operation of the App,</p>
      <p>- Provide misleading information to an individual or in the Mobile App.</p>

      <h2 className={styles.sectionTitle}>VIII. COPYRIGHT</h2>
      
      <p><strong>8.1.</strong> The content, design, text and graphic components, interfaces of the Online Store, and their design are the property of the Private Entrepreneur.</p>
      
      <p><strong>8.2.</strong> User registration in the Online Store does not transfer exclusive rights to the intellectual property and means of individualization owned by the Private Entrepreneur.</p>
      
      <p><strong>8.3.</strong> Use of intellectual property and means of individualization owned by the Private Entrepreneur without the consent of the Private Entrepreneur is prohibited.</p>
      
      <p><strong>8.4.</strong> If a violation of Section 8.3 of this Agreement is detected, the Private Entrepreneur has the right to restrict the User&apos;s access to the Online Store.</p>

      <h2 className={styles.sectionTitle}>IX. RESPONSIBILITY OF THE PARTIES</h2>
      
      <p><strong>9.1.</strong> The private Entrepreneur shall not be liable for damage caused to the User as a result of improper use of goods ordered through the online store, including as a result of violation of storage conditions and/or incorrect order placement, as well as incorrectly entered data.</p>
      
      <p><strong>9.2.</strong> The product may contain ingredients that can cause allergic reactions. By ordering a product from the online store, the User confirms that they have read the ingredients of the selected product and have no claims against the Company in this regard.</p>
      
      <p><strong>9.3.</strong> The Company is not liable for any damages incurred by the User as a result of incorrectly placing an order or providing incorrect information.</p>
      
      <p><strong>9.4.</strong> The liability of the Sole Proprietor is limited to the value of the User&apos;s last Order.</p>
      
      <p><strong>9.5.</strong> The Sole Proprietor is not liable for any indirect damages incurred by the User.</p>

      <h2 className={styles.sectionTitle}>X. FORCE MAJEURE</h2>
      
      <p><strong>10.1.</strong> The Parties shall be released from liability for failure to perform or improper performance of their obligations under this Agreement, in whole or in part, if such failure resulted from force majeure circumstances arising after the entry into force of this Agreement and which the Parties could not have foreseen or prevented. Such circumstances include: earthquakes, floods, fires, war, martial law and states of emergency, political instability, strikes, communications outages, actions of government agencies, power supply fluctuations, adverse weather conditions, technical system failures, congestion, and other circumstances that make it impossible or significantly impede the Parties&apos; fulfillment of their obligations under this Agreement.</p>
      
      <p><strong>10.2.</strong> In the event of force majeure, the deadlines for fulfilling the Parties&apos; obligations shall be extended in proportion to the duration of such circumstances and their consequences.</p>
      
      <p><strong>10.3.</strong> A Party for whom fulfillment of an obligation has become impossible or significantly hindered as a result of force majeure is obligated to immediately notify the other Party thereof.</p>

      <h2 className={styles.sectionTitle}>XI. DISPUTE RESOLUTION PROCEDURE</h2>
      
      <p><strong>11.1.</strong> Any disputes arising under this Agreement shall be resolved through negotiation.</p>
      
      <p><strong>11.2.</strong> The parties shall mutually agree to establish a pre-trial dispute resolution procedure for disputes arising under the User Agreement.</p>
      
      <p><strong>11.3.</strong> The party alleging a violation is obligated to submit a written pre-trial claim to the party allegedly committing the violation. If no response is received within 15 calendar days from the date of receipt of the pre-trial claim, or if the claim is rejected, the dispute may be referred to a competent court of the Republic of Armenia.</p>
      
      <p><strong>11.4.</strong> The applicable law to the User Agreement is the legislation of the Republic of Armenia.</p>

      <h2 className={styles.sectionTitle}>XII. GENERAL PROVISIONS</h2>
      
      <p><strong>12.1.</strong> The User Agreement comes into effect upon the User&apos;s registration in the Online Store. By registering in the Online Store, the User confirms that they have fully read and understand the terms of the Online Store User Agreement, the Private Entrepreneur Privacy Policy, and the Online Store System Operating Procedures, and have no objections thereto.</p>
      
      <p><strong>12.2.</strong> The Sole Proprietor has the right to unilaterally amend the User Agreement at any time. The new version of the Agreement shall take effect upon its posting by the Sole Proprietor in the Online Store. By placing each order through the Online Store, the User confirms that they have read and agree to the version of the User Agreement available in the Online Store.</p>
      
      <p><strong>12.3.</strong> Termination, cancellation, or invalidity of any part of the Agreement shall not entail the termination, cancellation, or invalidity of the remaining parts.</p>
      
      <p><strong>12.4.</strong> The provisions of the Civil Code of the Republic of Armenia on retail trade and the Law of the Republic of Armenia &ldquo;On the Protection of Consumer Rights&rdquo; shall apply, in particular, to the relationship between the User and the Private Entrepreneur.</p>
      
      <p><strong>12.5.</strong> This Agreement has been drawn up in Armenian, Russian, and English and is binding on the Parties. In the event of any discrepancies between the texts in the Armenian, Russian, and English languages, the Armenian version of the User Agreement shall prevail.</p>

      <h2 className={styles.sectionTitle}>XIII. DISCLAIMER</h2>
      
      <p><strong>13.1.</strong> Services are provided &ldquo;as is.&rdquo;</p>
      
      <p><strong>13.2.</strong> Overpack is not responsible for any disruptions to third-party services (such as banks or courier services).</p>
      
      <p><strong>13.3.</strong> Uninterrupted access is not guaranteed.</p>

      <h2 className={styles.sectionTitle}>XIV. COMPLIANCE WITH PLATFORM RULES</h2>
      
      <p><strong>14.1.</strong> Overpack complies with Google Play policies (including data security and tobacco restrictions).</p>
      
      <p><strong>14.2.</strong> The Overpack app complies with Apple&apos;s App Store policies (including review policies, privacy guidelines, and nutrition information).</p>
      
      <p><strong>14.3.</strong> All descriptions, screenshots, and advertisements accurately reflect the app&apos;s functionality.</p>

      <h2 className={styles.sectionTitle}>XV. TOBACCO DISCLAIMER</h2>
      <p><strong>Legal Information Regarding Tobacco</strong></p>
      
      <p><strong>15.1.</strong> The app does not advertise or encourage hookah use.</p>
      
      <p><strong>15.2.</strong> No claims are made that could indicate social, psychological, or medical benefits.</p>
      
      <p><strong>15.3.</strong> In accordance with the legislation of the Republic of Armenia:</p>
      <p>&ldquo;Smoking is harmful to health. This product is intended for adults (18+) only.&rdquo;</p>
    </div>
  );

  const HYContent = () => (
    <div className={styles.termsContent}>
      <h1 className={styles.title}>
        «ԳԱԳԻԿ ԳՐԻԳՈՐԻ ԲԱՂԴԱՍԱՐՅԱՆ» ԱՆՀԱՏ ՁԵՌՆԱՐԿԱՏԻՐՈՋ OVERPACK-Ի ԵՎ/ԿԱՄ ԲՋՋԱՅԻՆ ՀԱՎԵԼՎԱԾԻ ՕԳՏԱԳՈՐԾՄԱՆ ՊԱՅՄԱՆՆԵՐ
      </h1>
      
      <div className={styles.dates}>
        <p>Գործողության ամսաթիվ: 2025 թվականի հունվարի 15</p>
        <p>Վերջին թարմացում: 2025 թվականի հունվարի 15</p>
      </div>

      <p>Սույն օգտագործման համաձայնագիրը կնքվում է «Գագիկ Գրիգորի Բաղդասարյան» անհատ ձեռնարկատիրոջ (ՀՎՀՀ՝ 28345959, հասցե՝ 0048, ՀՀ, ք.Երևան, Նորաշեն թղմ. 11 շենք, բն. 54) (այսուհետ նաև՝ Overpack կամ Ա/Ձ կամ Բջջային հավելված) և Ա/Ձ-ի սեփականությունը հանդիսացող www.overpack.am կայքէջից և/կամ Overpack բջջային հավելվածից (կայքը և բջջային հավելվածը միասին հիշատակվելիս՝ նաև Առցանց խանութ կամ Բջջային հավելված) օգտվողի (այսուհետ՝ նաև Օգտատեր) միջև (Ա/Ձ-ն և Օգտատերը միասին հիշատակվելիս՝ նաև Կողմեր) և սահմանում է Օգտատիրոջ կողմից բջջային հավելվածի միջոցով ապրանքների ձեռքբերման պայմանները և կարգը (այսուհետ՝ նաև Օգտագործման համաձայնագիր):</p>

      <h2 className={styles.sectionTitle}>I. ՀԻՄՆԱԿԱՆ ՀԱՍԿԱՑՈՒԹՅՈՒՆՆԵՐ</h2>
      
      <h3 className={styles.subsectionTitle}>1. Սույն համաձայնագրում օգտագործվող ներքոշարադրյալ հասկացություններն ունեն հետևյալ նշանակությունը, մասնավորապես՝</h3>
      <p>ա) Առցանց խանութ կամ Բջջային հավելված՝ App Store և/կամ Google Play հարթակներում գտնվող «Overpack» բջջային հավելվածը, որը սեփականության իրավունքով պատկանում է Ա/Ձ-ին, և որտեղ ներկայացված է առցանց պատվիրելու համար նախատեսված Ա/Ձ-ի կողմից առաջարկվող ապրանքատեսականին, վերջինիս առաքման, վճարման, վերադարձման և այլ պայմանները:</p>
      <p>բ) կայք՝ https://www.overpack.am հասցեում գտնվող «www.overpack.am» կայքը, որը սեփականության իրավունքով պատկանում է Ա/Ձ-ին, և որտեղ ներկայացված են տեղեկություններ Ա/Ձ-ի, նրա կողմից մատուցվող ծառայությունների, App Store և/կամ Google Play հարթակներում գտնվող «Overpack» բջջային հավելվածի մասին։</p>
      <p>գ) Ապրանք՝ Առցանց խանութում Օգտատիրոջ կողմից պատվերի ձևակերպման համար հասանելի ցանկացած ապրանք, որը ներկայացված է Առցանց խանութում:</p>
      <p>դ) Օգտատեր՝ համացանցի միջոցով Առցանց խանութին հասանելիություն ունեցող և Առցանց խանութից օգտվող չափահաս ֆիզիկական անձ և/կամ իրավաբանական անձ։</p>
      <p>ե) Պատվեր՝ Օգտատիրոջ կողմից Առցանց խանութում և/կամ Բջջային հավելվածում ներկայացված ապրանքի գնման համար ձևակերպված՝ Բջջային հավելվածի օգտագործման պահանջներին համապատասխանող հարցում:</p>
      <p>զ) Առաքիչ՝ ֆիզիկական անձ և/կամ անհատ ձեռնարկատեր և/կամ իրավաբանական անձի անունից հանդես եկող վերջինիս աշխատող, ով իրականացնում է Օգտատիրոջ կողմից ձևակերպված Պատվերի մեջ նշված Ապրանքի առաքումն Օգտատիրոջը կամ նրա կողմից մատնանշված անձին։</p>

      <h2 className={styles.sectionTitle}>II. ԸՆԴՀԱՆՈՒՐ ԴՐՈՒՅԹՆԵՐ</h2>
      
      <h3 className={styles.subsectionTitle}>2.1. Սույն համաձայնագիրը համարվում է կնքված Օգտատիրոջ կողմից Առցանց խանութում գրանցման պահից: Պատվիրելով Ապրանք կամ Ապրանքներ Առցանց խանութի միջոցով՝ Օգտատերը համաձայնում է այդ Ապրանքի կամ Ապրանքների վաճառքի պայմաններին, որոնք սահմանված են սույն համաձայնագրով:</h3>
      
      <h3 className={styles.subsectionTitle}>2.2. Օգտատերը պարտավոր է ծանոթանալ սույն համաձայնագրով սահմանված դրույթներին նախքան Առցանց խանութում գրանցվելը: Սույն համաձայնագրով սահմանված պայմանների հետ համաձայն չլինելու դեպքում Օգտատերը պետք է զերծ մնա Առցանց խանութից օգտվելուց:</h3>
      
      <h3 className={styles.subsectionTitle}>2.3. Սույն համաձայնագրով նախատեսված Ապրանքի վաճառքի պայմանները, ինչպես նաև Առցանց խանութում ներկայացված Ապրանքի մասին տեղեկատվությունը հանդիսանում են հրապարակային օֆերտա:</h3>
      
      <h3 className={styles.subsectionTitle}>2.4. Առցանց խանութում ևև/կամ Բջջային հավելվածում գրանցվելով և համաձայնվելով սույն համաձայնագրի պայմանների հետ՝ Օգտատերն հաստատում է, որ Ապրանքը ձեռք է բերում բացառապես անձնական, ընտանեկան, տնային և այլ կարիքների համար, որոնք կապված չեն ձեռնարկատիրական գործունեության իրականացման հետ, եթե Օգտատերն իրավաբանական անձ չէ։</h3>
      
      <h3 className={styles.subsectionTitle}>2.5. Եթե Օգտատերն իրավաբանական անձ է, ապա Սույն համաձայնագրի 2.4. կետում նախատեսված պահանջը նրա նկատմամբ կիրառելի չէ։</h3>
      
      <h3 className={styles.subsectionTitle}>2.6. Հավելվածում ներկայացված և «Ծխախոտային արտադրանքի օգտագործման, վաճառքի և սպառման սահմանափակումների մասին» ՀՀ օրենքի իմաստով ծխախոտային արտադրանք հանդիսացող Ապրանքը Ա/Ձ-ն վաճառում է բացառապես 18 տարին լրացած ֆիզիկական անձ հանդիսացող Օգտատերերին։</h3>
      
      <h3 className={styles.subsectionTitle}>2.7. Եթե Օգտատեր ֆիզիկական անձի 18 տարին չի լրացել, ապա վերջինս չի կարող ձեռք բերել Հավելվածում ներկայացված և «Ծխախոտային արտադրանքի օգտագործման, վաճառքի և սպառման սահմանափակումների մասին» ՀՀ օրենքի իմաստով ծխախոտային արտադրանք հանդիսացող Ապրանքը։ Օգտատեր ֆիզիկական անձն ինքն է հաստատում, որ Պատվերի ձևակերպման պահին նրա 18 տարին լրացել է:</h3>

      <h2 className={styles.sectionTitle}>III. ԳՐԱՆՑՈՒՄ, ՊԱՏՎԵՐԻ ՁԵՎԱԿԵՐՊՈՒՄ ԵՎ ԿԱՏԱՐՄԱՆ ԺԱՄԿԵՏՆԵՐԸ</h2>
      
      <h3 className={styles.subsectionTitle}>3.1. Առցանց խանութի միջոցով Պատվերների ձևակերպման համար Օգտատերը նախևառաջ պետք է գրանցվի Առցանց խանութում:</h3>
      
      <h3 className={styles.subsectionTitle}>3.2. Առցանց խանութում գրանցվելիս, ի թիվս Ա/Ձ-ի կողմից պահանջվող այլ տեղեկատվության, Օգտատիրոջ կողմից պետք է տրամադրվեն հետևյալ տեղեկությունները, մասնավորապես՝</h3>
      
      <h4 className={styles.subsubsectionTitle}>3.2.2. ֆիզիկական անձ Օգտատիրոջ դեպքում՝</h4>
      <p>- հեռախոսահամարը</p>
      <p>- Ա/Ձ-ի կողմից կարճ հաղորդագրության (SMS) միջոցով ուղարկված ծածկագիրը,</p>
      <p>- անուն, ազգանունը,</p>
      <p>- ծննդյան ամսաթիվը,</p>
      <p>- էլեկտրոնային փոստի հասցեն,</p>
      <p>- սեռը,</p>
      <p>- հասցեն:</p>
      
      <h4 className={styles.subsubsectionTitle}>3.2.3. Իրավաբանական անձ Օգտատիրոջ դեպքում՝</h4>
      <p>- ՀՎՀՀ,</p>
      <p>- հեռախոսահամարը</p>
      <p>- Ա/Ձ-ի կողմից կարճ հաղորդագրության (SMS) միջոցով ուղարկված ծածկագիրը,</p>
      <p>- լիազորված անձի անուն, ազգանունը,</p>
      <p>- ինքնությունը հաստատող փաստաթղթի տվյալները,</p>
      <p>- էլեկտրոնային փոստի հասցեն,</p>
      <p>- հասցեն:</p>
      
      <h3 className={styles.subsectionTitle}>3.3. Գրանցվելուց հետո Օգտատերն իրականացնում է Ապրանքի ընտրությունն Առցանց խանութում և ընտրված Ապրանքը տեղափոխում է Բջջային հավելվածում նշված զամբյուղի մեջ Պատվերի ձևակերպման համար: Օգտատերը մինչև Պատվերի հաստատումը կարող է ինքնուրույն հեռացնել և ավելացնել Ապրանքները զամբյուղից։</h3>
      
      <h3 className={styles.subsectionTitle}>3.4. Առցանց խանութում տեղադրված լուսանկարները կարող են որոշակիորեն տարբերվել իրական Ապրանքից: Ապրանքն ուղեկցող նկարագրությունները կամ բնութագրերը սպառիչ չեն և կարող են պարունակել անճշտություններ:</h3>
      
      <h3 className={styles.subsectionTitle}>3.5. Ընտրելով ցանկալի Ապրանքը և տեղափոխելով այն զամբյուղի մեջ՝ Օգտատերը պարտավոր է լրացնել առաքման հասցեն։</h3>
      
      <h3 className={styles.subsectionTitle}>3.6. Պատվերը ձևակերպելիս Օգտատերը պետք է տրամադրի իրական և վավեր տվյալներ, որոնք անհրաժեշտ են Պատվերի կատարման համար։ Ա/Ձ-ն պատասխանատու չէ Օգտատիրոջ կողմից տրամադրված տվյալների ճշտության և վավերականության համապատասխանության և դրանց պատճառով առաջացած հետևանքների համար:</h3>
      
      <h3 className={styles.subsectionTitle}>3.7. Պատվերը հաստատելուց հետո Օգտատերը չի կարող փոխել Պատվերում նշված Ապրանքները։</h3>
      
      <h3 className={styles.subsectionTitle}>3.8. Պատվերը ձևակերպելիս, ի թիվս Ա/Ձ-ի կողմից պահանջվող այլ տեղեկատվության, Օգտատիրոջ կողմից պետք է նշվեն հետևյալ տեղեկությունները՝</h3>
      <p>- առաքման ժամանակահատվածը,</p>
      <p>- պատվերը ստացողի անունը, եթե վերջինս Օգտատերը չէ,</p>
      <p>- լրացուցիչ հեռախոսահամար՝ ըստ անհրաժեշտության,</p>
      <p>- վճարման եղանակը,</p>
      <p>- բոնուս քարտի միջոցով վճարման ցանկության դեպքում՝ բոնուս քարտից գանձման ենթակա գումարի չափը,</p>
      <p>- մեկնաբանություններ՝ ըստ անհրաժեշտության:</p>
      
      <h3 className={styles.subsectionTitle}>3.9. Պատվերի հաստատման, ինչպես նաև պատվերի հավաքման, առաքման, տեղում լինելու և ավարտված լինելու փուլերի մասին Օգտատերը տեղեկացվում է Ա/Ձ-ի կողմից վերջինիս ուղարկվող փուշ հաղորդագրությունների միջոցով:</h3>
      
      <h3 className={styles.subsectionTitle}>3.10. Եթե Ա/Ձ-ի պահեստում բացակայում է զամբյուղ տեղափոխված Ապրանքը, ապա Ա/Ձ-ն այդ մասին ծանուցում է Օգտատիրոջն Առցանց խանութի միջոցով կամ որևէ այլ եղանակով:</h3>

      <h2 className={styles.sectionTitle}>IV. ՎՃԱՐՄԱՆ ԿԱՐԳԸ</h2>
      
      <h3 className={styles.subsectionTitle}>4.1. Առցանց խանութում Ապրանքի գինը նշված է ՀՀ դրամով: Ֆիզիկական անձ Օգտատիրոջ համար Առցանց խանութում նշված Ապրանքի գինը ներառում է ՀՀ օրենսդրությամբ նախատեսված բոլոր հարկերը։</h3>
      
      <h3 className={styles.subsectionTitle}>4.2. Պատվերի ընդհանուր արժեքը ձևավորվում է Օգտատիրոջ կողմից զամբյուղ տեղափոխված բոլոր Ապրանքների, ինչպես նաև դրանց առաքման և վերջնական փաթեթավորման համար օգտագործված տոպրակների արժեքի հանրագումարից: Աոաքման և պատվիրված ապրանքի փաթեթավորման համար օգտագործված տոպրակների համար գանձվող գումարի չափը նույնպես կարող է նշվել Առցանց խանութում:</h3>
      
      <h3 className={styles.subsectionTitle}>4.3. Օգտատերն ունի հնարավորություն ընտրելու առաքման ժամկետը, որը չի կարող գերազանցել Պատվերը հաստատվելուց հետո 1 օրը:</h3>
      
      <h3 className={styles.subsectionTitle}>4.4. Ա/Ձ-ն իրավունք ունի միակողմանիորեն փոխել Ապրանքի գինը մինչև Օգտատիրոջ կողմից Պատվերի հաստատումը:</h3>
      
      <h3 className={styles.subsectionTitle}>4.5. Օգտատերը Պատվերի վճարումը կատարում է անկանխիկ եղանակով՝ Առցանց խանութում առկա վճարային համակարգի միջոցով անկանխիկ փոխանցում կատարելով։</h3>
      
      <h3 className={styles.subsectionTitle}>4.6. Օգտատերն իրավունք ունի Առցանց խանութում իր անձնական էջին կցել բանկային քարտ/քարտեր:</h3>
      
      <h3 className={styles.subsectionTitle}>4.7. Վճարման պայմանները վերահսկվում են երրորդ անձ հանդիսացող բանկերի, ինչպես նաև վճարահաշվարկային կազմակերպությունների կողմից, որոնց հետ համագործակցում է Ա/Ձ-ն:</h3>
      
      <h3 className={styles.subsectionTitle}>4.8. Ընտրելով անկանխիկ եղանակով վճարման տարբերակը՝ Օգտատերը հաստատում է, որ տեղյակ է և համաձայն երրորդ անձ հանդիսացող բանկերի կամ վճարահաշվարկային կազմակերպությունների կանոնների հետ, և որ Ա/Ձ-ի նկատմամբ վերջիններիս կողմից սահմանված պայմանների հետ կապված որևէ առարկություն և/կամ պահանջ չունի:</h3>
      
      <h3 className={styles.subsectionTitle}>4.9. Առցանց խանութում առկա վճարային համակարգի միջոցով անկանխիկ վճարման տարբերակն ընտրելիս՝ Օգտատերը պետք է վճարի պատվերում նշված գումարն ամբողջությամբ: Ոչ ամբողջական վճարման դեպքում (անբավարար վճարում կամ անբավարար միջոցներ) պատվերը չի հաստատվում և չի մշակվում համակարգում: Նման պարագայում Օգտատիրոջից որևէ գումար չի գանձվում:</h3>

      <h2 className={styles.sectionTitle}>V. ԱՌԱՔՈՒՄ</h2>
      
      <h3 className={styles.subsectionTitle}>5.1. Ապրանքի առաքումն իրականացվում է Առաքիչների կողմից Հայաստանի Հանրապետության սահմաններում:</h3>
      
      <h3 className={styles.subsectionTitle}>5.2. Առաքման ժամկետները կախված են հեռավորությունից և ճանապարհների բեռնվածությունից:</h3>
      
      <h3 className={styles.subsectionTitle}>5.3. Առաքման արժեքը ներառված է Պատվերի ընդհանուր արժեքում:</h3>
      
      <h3 className={styles.subsectionTitle}>5.4. Ապրանքը ստանալու պահին Օգտատերը պարտավոր է ստուգել առաքված Ապրանքի համապատասխանությունը (քանակ, որակ և այլն) Պատվերին միայն Առաքիչի ներկայությամբ:</h3>

      <h2 className={styles.sectionTitle}>VI. ՊԱՏՎԵՐԻՑ ՀՐԱԺԱՐՎԵԼՈՒ ԵՎ ԱՌԱՔՎԱԾ ԱՊՐԱՆՔԸ ՎԵՐԱԴԱՐՁՆԵԼՈՒ ԿԱՐԳԸ</h2>
      
      <h3 className={styles.subsectionTitle}>6.1. Օգտատերն իրավունք ունի հրաժարվել պատվիրված Ապրանքից մինչև առաքման փուլի վերաբերյալ փուշ հաղորդագրություն ստանալը:</h3>
      
      <h3 className={styles.subsectionTitle}>6.2. Առաքված ապրանքից Օգտատիրոջ հրաժարվելու դեպքում Ա/Ձ-ն իրավունք ունի Օգտատիրոջ կողմից փոխանցված դրամական միջոցներից պահել առաքման ծառայությունների արժեքը: Չստացված ապրանքի դիմաց Օգտատիրոջ կողմից վճարված գումարը վերադարձվում է վերջինիս՝ սույն համաձայնագրով սահմանված ժամկետներում:</h3>
      
      <h3 className={styles.subsectionTitle}>6.3. Պատվերը ստանալու պահին Օգտատիրոջ կողմից անպատշաճ որակի Ապրանքներ հայտնաբերվելու կամ ստացված Ապրանքները Պատվերին չհամապատասխանելու դեպքում Օգտատերն իրավունք ունի պահանջել այդ Ապրանքները փոխարինել պատշաճ որակի Ապրանքներով կամ հրաժարվել դրանք ընդունելուց և պահանջել վերադարձնել անպատշաճ որակի Ապրանքների համար վճարված գումարը: Ա/Ձ-ն պարտավոր է այդ Ապրանքը փոխարինել Օգտատիրոջ պահանջը ստանալուց հետո մեկ օրվա ընթացքում: Եթե պահանջը ներկայացնելու պահին Ա/Ձ-ի մոտ բացակայում է փոխարինման համար անհրաժեշտ Ապրանքը, ապա Ա/Ձ-ն պարտավոր է մեկ օրվա ընթացքում տեղեկացնել Օգտատիրոջը Ապրանքի բացակայության մասին և սույն համաձայնագրով սահմանված ժամկետներում վերջինիս վերադարձնել չստացված Ապրանքի դիմաց վճարված գումարը:</h3>
      
      <h3 className={styles.subsectionTitle}>6.4. Եթե Ապրանքի համար սահմանված է երաշխիքային ժամկետ, Օգտատերն իրավունք ունի Ապրանքի թերությունների հետ կապված պահանջներ ներկայացնել, եթե թերությունները հայտնաբերվել են երաշխիքային ժամկետի ընթացքում:</h3>
      
      <h3 className={styles.subsectionTitle}>6.5. Առաքված ապրանքների նկարագրության, դիզայնի և/կամ ձևավորման ոչ էական տարբերությունները Առցանց խանութում ներկայացվածի հետ չեն կարող վկայել անպատշաճ որակի մասին:</h3>
      
      <h3 className={styles.subsectionTitle}>6.6. Օգտատերն իրավունք չունի վերադարձնել ձեռք բերված պատշաճ որակի պարենային, ինչպես նաև ՀՀ կառավարության կողմից սահմանված վերադարձման և/կամ փոխարինման ոչ ենթակա Ապրանքները:</h3>
      
      <h3 className={styles.subsectionTitle}>6.7. Օգտատերն իրավունք ունի պատշաճ որակի ոչ պարենային Ապրանքն օրենքով սահմանված ժամկետներում վերադարձնելու Ա/Ձ-ին կամ դրանք փոխարինելու այլ չափի, ձևի, գույնի կամ համանման կոմպլեկտայնության Ապրանքով` գնի տարբերության դեպքում անհրաժեշտ վերահաշվարկ կատարելով Ա/Ձ-ի հետ:</h3>
      
      <h3 className={styles.subsectionTitle}>6.8. Պատշաճ որակի Ապրանքը չի կարող վերադարձվել՝</h3>
      <p>- եթե Ապրանքների պատրաստումը և մատակարարումը իրականացվել են Օգտատիրոջ հատուկ պահանջներին համապատասխան, կամ Ապրանքները անհատականացված են,</p>
      <p>- երբ մատակարարվում են Ապրանքներ, որոնք ունեն արագ փչացման, քայքայման կամ որակի փոփոխության հատկություն,</p>
      <p>- կապարակնքված Ապրանքների վաճառքի դեպքում, որոնք վերադարձման ենթակա չեն առողջապահական կամ հիգիենիկ նկատառումներից ելնելով, և որոնք մատակարարվելուց հետո ապակապարակնքվել են գնորդի կողմից,</p>
      <p>- Ապրանքների վաճառքի դեպքում, որոնց մատակարարումից հետո, իրենց բնույթից ելնելով, անքակտելիորեն միախառնվում են միմյանց հետ:</p>
      
      <h3 className={styles.subsectionTitle}>6.7. Ապրանքը վերադարձնելու կամ փոխարինելու մասին Օգտատիրոջ պահանջը բավարարվում է, եթե Ապրանքը չի օգտագործվել, պահպանված են դրա սպառողական հատկանիշները և առկա են Ապրանքն Ա/Ձ-ից ձեռք բերելու մասին ապացույցներ:</h3>
      
      <h3 className={styles.subsectionTitle}>6.8. Պատշաճ որակի ոչ պարենային Aպրանքը վերադարձնելու կամ փոխարինելու հետ կապված ծախսերը կատարվում են Օգտատիրոջ հաշվին:</h3>
      
      <h3 className={styles.subsectionTitle}>6.9. Սույն համաձայնագրով նախատեսված դեպքերում Ապրանքի համար վճարված դրամական գումարի վերադարձման պահանջները ենթակա են բավարարման համապատասխան պահանջը ներկայացնելու օրվանից 15 օրվա ընթացքում:</h3>
      
      <h3 className={styles.subsectionTitle}>6.10. Ա/Ձ-ն իրավունք ունի մերժել Առցանց խանութի միջոցով Պատվերի ձևակերպումը, եթե նախկինում Օգտատիրոջ կողմից կատարված Պատվերները չեն ստացվել վերջինիս կողմից իր մեղքով (Օգտատերը չի բացել դուռը կամ Պատվերն առաքվելու ընթացքում չի պատասխանել առաքչի զանգերին կամ նշել է առաքման գոյություն չունեցող հասցե և այլն):</h3>

      <h2 className={styles.sectionTitle}>VII. ԿՈՂՄԵՐԻ ԻՐԱՎՈՒՆՔՆԵՐԸ ԵՎ ՊԱՐՏԱԿԱՆՈՒԹՅՈՒՆՆԵՐԸ</h2>
      
      <h3 className={styles.subsectionTitle}>7.1. Ա/Ձ-ն իրավունք ունի, մասնավորապես՝</h3>
      <p>- Օգտատիրոջ կողմից սույն համաձայնագրով սահմանված պայմանների խախտման դեպքում սահմանափակել կամ արգելել վերջինիս մուտքն Առցանց խանութ,</p>
      <p>- պահանջել Օգտատիրոջից վճարել առաքված և վերջինիս կողմից ընդունված ապրանքի դիմաց սահմանված գումարը,</p>
      <p>- կասեցնել և/կամ դադարեցնել և/կամ ջնջել Օգտատիրոջ հաշիվները սույն համաձայնագրի և/կամ «Գաղտնիության քաղաքականության» պահանջների և/կամ օրենսդրությամբ նախատեսված այլ պարտադիր պահանջների խախտումների համար,</p>
      <p>- իրականացնել ՀՀ օրենսդրությունից և Օգտագործման համաձայնագրից բխող այլ իրավունքներ:</p>
      
      <h3 className={styles.subsectionTitle}>7.2. Ա/Ձ-ն պարտավոր է, մասնավորապես՝</h3>
      <p>- ապահովել Օգտատիրոջ անձնական տվյալների գաղտնիությունը՝ Առցանց խանութում տեղադրված «գաղտնիության քաղաքականության» պայմաններին համապատասխան,</p>
      <p>- կատարել ՀՀ օրենսդրությունից և Օգտագործման համաձայնագրից բխող այլ պարտականություններ:</p>
      
      <h3 className={styles.subsectionTitle}>7.3. Օգտատերն իրավունք ունի, մասնավորապես՝</h3>
      <p>- Առցանց խանութում գրանցվելուց հետո այն օգտագործելու համար ստանալ հասանելիություն,</p>
      <p>- օգտվել Առցանց խանութում առկա բոլոր ծառայություններից, ինչպես նաև ձեռք բերել կամ հրաժարվել Առցանց խանութում առաջարկվող ցանկացած ապրանք ձեռք բերելուց,</p>
      <p>- Առցանց խանութի միջոցով Ա/Ձ-ի կողմից մատուցվող ծառայությունների վերաբերյալ ներկայացնել ցանկացած տեսակի հարցեր Առցանց խանութում առկա ցանկացած հաղորդակցության միջոցով,</p>
      <p>- օգտվել Առցանց խանութից բացառապես Օգտագործման համաձայնագրով նախատեսված և ՀՀ օրենսդրությամբ չարգելված նպատակներով և կարգով,</p>
      <p>- առանց Ա/Ձ-ին վնաս պատճառելու ջնջել հաշիվները ցանկացած ժամանակ,</p>
      <p>- իրականացնել ՀՀ օրենսդրությունից և սույն համաձայնագրից բխող այլ իրավունքներ:</p>
      
      <h3 className={styles.subsectionTitle}>7.4. Օգտատերը պարտավոր է, մասնավորապես՝</h3>
      <p>- առաքված ապրանքի համար վճարել սույն համաձայնագրով սահմանված կարգով,</p>
      <p>- տրամադրել լրացուցիչ տեղեկատվություն, որն անմիջական կապ ունի Առցանց խանութի կողմից մատուցվող ծառայությունների հետ,</p>
      <p>- Առցանց խանութի օգտագործման ժամանակ պահպանել հեղինակների և այլ իրավատերերի գույքային և ոչ գույքային իրավունքները,</p>
      <p>- չձեռնարկել որևէ գործողություն, որը կարող է ազդել Առցանց խանութի բնականոն գործունեության վրա,</p>
      <p>- Առցանց խանութի միջոցով չտարածել ֆիզիկական և/կամ իրավաբանական անձանց վերաբերող և ՀՀ օրենսդրությամբ պահպանվող գաղտնի տեղեկատվությունը,</p>
      <p>- խուսափել ցանկացած տիպի գործողություններից, որոնց արդյունքում կարող է խախտվել ՀՀ օրենսդրությամբ պահպանվող տեղեկատվության գաղտնիությունը,</p>
      <p>- կատարել ՀՀ օրենսդրությունից և սույն համաձայնագրից բխող այլ պարտականություններ:</p>
      
      <h3 className={styles.subsectionTitle}>7.5. Օգտատերն իրավունք չունի, մասնավորապես՝</h3>
      <p>- Պատվեր ձևակերպել անչափահասների անունից,</p>
      <p>- անօրինական կերպով կատարել Ապրանքի վերավաճք, եթե Օգտատերը ֆիզիկական անձ է,</p>
      <p>- որևէ անօրինական կամ վնասակար եղանակով օգտագործել Բջջային հավելվածը կամ խանգարել Հավելվածի աշխատանքը,</p>
      <p>- Ա/Ձ-ին կամ Բջջային հավելվածում ներկայացնել մոլորեցնող տեղեկություններ:</p>

      <h2 className={styles.sectionTitle}>VIII. ՀԵՂԻՆԱԿԱՅԻՆ ԻՐԱՎՈՒՆՔԸ</h2>
      
      <h3 className={styles.subsectionTitle}>8.1. Առցանց խանութի բովանդակությունը, դիզայնը, տեքստը, գրաֆիկան և ինտերֆեյսները և դրանց դասավորությունը հանդիսանում են Ա/Ձ-ի սեփականությունը:</h3>
      
      <h3 className={styles.subsectionTitle}>8.2. Առցանց խանութում Օգտատիրոջ գրանցումը չի հանգեցնում Ա/Ձ-ին պատկանող մտավոր գործունեության արդյունքների և անհատականացման միջոցների նկատմամբ բացառիկ իրավունքների փոխանցմանը Օգտատիրոջը:</h3>
      
      <h3 className={styles.subsectionTitle}>8.3. Առանց Ա/Ձ-ի համաձայնության վերջինիս պատկանող մտավոր գործունեության արդյունքների և անհատականացման միջոցների օգտագործումը չի թույլատրվում։</h3>
      
      <h3 className={styles.subsectionTitle}>8.4. Սույն համաձայնագրի 8.3.-րդ կետի խախտում հայտնաբերելու դեպքում Ա/Ձ-ն կարող է սահմանափակել Օգտատիրոջ մուտքն Առցանց խանութ:</h3>

      <h2 className={styles.sectionTitle}>IX. ԿՈՂՄԵՐԻ ՊԱՏԱՍԽԱՆԱՏՎՈՒԹՅՈՒՆԸ</h2>
      
      <h3 className={styles.subsectionTitle}>9.1. Ա/Ձ-ն պատասխանատվություն չի կրում Առցանց խանութի միջոցով պատվիրված ապրանքների ոչ պատշաճ օգտագործման՝ այդ թվում պահպանման ժամկետների և պայմանների խախտման և/կամ պատվերի սխալ ձևակերպման, ինչպես նաև սխալ տվյալների նշման հետևանքով Օգտատիրոջը պատճառված վնասների համար:</h3>
      
      <h3 className={styles.subsectionTitle}>9.2. Ապրանքի բաղադրության մեջ կարող են ընդգրկվել այնպիսի բաղադրիչներ, որոնք առաջացնում են ալերգիկ ռեակցիաներ: Պատվիրելով ապրանքը Առցանց խանութում՝ Օգտատերն հաստատում է, որ ծանոթացել է իր ընտրած ապրանքի բաղադրությանը և դրա հետ կապված Ընկերության նկատմամբ պահանջներ չունի:</h3>
      
      <h3 className={styles.subsectionTitle}>9.3. Ընկերությունը պատասխանատվություն չի կրում Օգտատիրոջ կողմից պատվերի սխալ լրացման, ինչպես նաև իր տվյալների սխալ նշման արդյունքում վերջինիս կրած վնասների համար:</h3>
      
      <h3 className={styles.subsectionTitle}>9.4. Ա/Ձ-ի պատասխանատվությունը սահմանափակված է Օգտատիրոջ վերջին Պատվերի արժեքով:</h3>
      
      <h3 className={styles.subsectionTitle}>9.5. Ա/Ձ-ն պատասխանատվություն չի կրում Օգտատիրոջ կրած անուղղակի վնասների համար:</h3>

      <h2 className={styles.sectionTitle}>X. ԱՆՀԱՂԹԱՀԱՐԵԼԻ ՈՒԺԻ ԱԶԴԵՑՈՒԹՅՈՒՆԸ</h2>
      
      <h3 className={styles.subsectionTitle}>10.1. Սույն համաձայնագրով պարտավորություններն ամբողջությամբ կամ մասնակիորեն չկատարելու համար Կողմերն ազատվում են պատասխանատվությունից, եթե դա եղել է անհաղթահարելի ուժի ազդեցության հետևանքով, որը ծագել է սույն համաձայնագիրն ուժի մեջ մտնելուց հետո, և որը Կողմերը չէին կարող կանխատեսել կամ կանխարգելել։ Այդպիսի իրավիճակներից են` երկրաշարժը, ջրհեղեղը, հրդեհը, պատերազմը, ռազմական և արտակարգ դրություն հայտարարելը, քաղաքական հուզումները, գործադուլները, հաղորդակցության միջոցների աշխատանքի դադարեցումը, պետական մարմինների ակտերը, էլեկտրական էներգիայի տատանումները, անբարենպաստ եղանակային պայմանները, տեխնիկական համակարգերի խափանումները, խցանումները և այլ հանգամանքներ, որոնք անհնարին են դարձնում կամ էականորեն դժվարացնում են սույն համաձայնագրով Կողմերի պարտավորությունների կատարումը։</h3>
      
      <h3 className={styles.subsectionTitle}>10.2. Անհաղթահարելի հանգամանքների ի հայտ գալու դեպքում Կողմերի պարտավորությունների կատարման ժամկետները հետաձգվում են այդ հանգամանքների և դրանց հետևանքների գործողության ժամանակին համապատասխան:</h3>
      
      <h3 className={styles.subsectionTitle}>10.3. Կողմը, որի համար պարտավորության կատարումն անհնարին է դարձել կամ էականորեն դժվարացել է անհաղթահարելի ուժի ազդեցության հետևանքով, պարտավոր է անհապաղ այդ մասին տեղեկացնել մյուս կողմին:</h3>

      <h2 className={styles.sectionTitle}>XI. ՎԵՃԵՐԻ ԼՈՒԾՄԱՆ ԿԱՐԳԸ</h2>
      
      <h3 className={styles.subsectionTitle}>11.1. Սույն համաձայնագրի կապակցությամբ ծագած ցանկացած վեճ լուծվում է բանակցությունների միջոցով:</h3>
      
      <h3 className={styles.subsectionTitle}>11.2. Կողմերը փոխադարձ համաձայնությամբ Օգտագործման համաձայնագրից բխող վեճերի լուծման եղանակ են սահմանում նախապահանջային եղանակը:</h3>
      
      <h3 className={styles.subsectionTitle}>11.3. Խախտում վկայակոչող կողմը ենթադրյալ խախտում թույլ տված կողմին խախտման վերաբերյալ ներկայացնում է գրավոր նախապահանջ: Նախապահանջը ստանալու պահից 15 օրացուցային օրվա ընթացքում դրա վերաբերյալ պատասխան չստացվելու կամ ներկայացված պահանջը մերժվելու դեպքում վեճը կարող է հանձնվել Հայաստանի Հանրապետության իրավասու դատարանի քննությանը:</h3>
      
      <h3 className={styles.subsectionTitle}>11.4. Օգտագործման համաձայնագրի նկատմամբ կիրառելի իրավունք է հանդիսանում ՀՀ օրենսդրությունը:</h3>

      <h2 className={styles.sectionTitle}>XII. ԱՅԼ ԴՐՈՒՅԹՆԵՐ</h2>
      
      <h3 className={styles.subsectionTitle}>12.1. Օգտագործման համաձայնագիրն ուժի մեջ է մտնում Օգտատիրոջ կողմից Առցանց խանութում գրանցման պահից: Գրանցվելով Առցանց խանութում՝ Օգտատերն հավաստում է, որ ամբողջությամբ ծանոթացել է Առցանց խանութի Օգտագործման համաձայնագրի պայմաններին, Ա/Ձ-ի Գաղտնիության քաղաքականությանը, Առցանց խանութի համակարգի գործունեությանը և որևէ առարկություն չունի դրանց վերաբերյալ:</h3>
      
      <h3 className={styles.subsectionTitle}>12.2. Ա/Ձ-ն իրավունք ունի ցանկացած պահի միակողմանի փոփոխել Օգտագործման համաձայնագիրը: Համաձայնագրի նոր խմբագրությունն ուժի մեջ է մտնում Ա/Ձ-ի կողմից այն Առցանց խանութում տեղադրելու պահից: Յուրաքանչյուր պատվեր Առցանց խանութի միջոցով ձևակերպելիս Օգտատերն հավաստում է, որ ծանոթացել և համաձայն է տվյալ պահին Առցանց խանութում առկա Օգտագործման համաձայնագրի խմբագրությանը:</h3>
      
      <h3 className={styles.subsectionTitle}>12.3. Համաձայնագրի որևէ մասի գործողության դադարեցումը, չեղյալ հայտարարելը կամ անվավերությունը չի հանգեցնում մյուս մասերի դադարեցմանը, չեղյալ հայտարարելուն կամ անվավերությանը:</h3>
      
      <h3 className={styles.subsectionTitle}>12.4. Օգտատիրոջ և Ա/Ձ-ի միջև հարաբերությունների նկատմամբ ի թիվս այլոց կիրառելի են ՀՀ քաղաքացիական օրենսգրքով սահմանված մանրածախ առուվաճառքին վերաբերող, ինչպես նաև «Սպառողների իրավունքների պաշտպանության մասին» ՀՀ օրենքով սահմանված դրույթները:</h3>
      
      <h3 className={styles.subsectionTitle}>12.5. Սույն համաձայնագիրը կազմված է հայերենով, ռուսերենով և անգլերենով և պարտադիր է Կողմերի համար։ Հայերեն, ռուսերեն և անգլերեն տեքստերի միջև տարընթերցումների դեպքում առավելությունը տրվում է Օգտագործման համաձայնագրի հայերեն տարբերակին:</h3>

      <h2 className={styles.sectionTitle}>XIII. ՀՐԱԺԱՐՈՒՄՆԵՐ</h2>
      
      <h3 className={styles.subsectionTitle}>13.1. Ծառայությունները տրամադրվում են ,ինչպես կան:</h3>
      
      <h3 className={styles.subsectionTitle}>13.2. Overpack-ը պատասխանատու չէ երրորդ կողմերի ձախողումների համար (բանկ, առաքիչներ):</h3>
      
      <h3 className={styles.subsectionTitle}>13.3. Չկա անխափան մուտքի երաշխիք:</h3>

      <h2 className={styles.sectionTitle}>XIV. ՊԼԱՏՖՈՐՄԻ ԿԱՆՈՆՆԵՐԻ ՊԱՀՊԱՆՈՒՄ</h2>
      
      <h3 className={styles.subsectionTitle}>14.1. Overpack-ը պահպանում է Google Play-ի քաղաքականությունները (ներառյալ Տվյալների անվտանգություն և ծխախոտի սահմանափակումներ):</h3>
      
      <h3 className={styles.subsectionTitle}>14.2. Overpack-ը պահպանում է Apple-ի App Store-ի ուղեցույցները (ներառյալ Հավելվածների ստուգման ուղեցույցներ, Գաղտնիության սննդային պիտակներ):</h3>
      
      <h3 className={styles.subsectionTitle}>14.3. Հավելվածի բոլոր նկարագրությունները, էկրանի լուսանկարները և գովազդները ճշգրիտ արտացոլում են ֆունկցիոնալությունը:</h3>

      <h2 className={styles.sectionTitle}>XV. ԾԽԱԽՈՏԻ ՄԱՍԻՆ ՀՐԱՋԱՐՈՒՄ</h2>
      <h3 className={styles.subsectionTitle}>Ծխախոտի մասին իրավական նշումներ</h3>
      
      <h3 className={styles.subsectionTitle}>15.1 Հավելվածը չի գովազդում և չի խրախուսում նարգիլեի օգտագործումը։</h3>
      
      <h3 className={styles.subsectionTitle}>15.2 Չեն արվում որևէ հայտարարություններ, որոնք կարող են մատնանշել սոցիալական, հոգեբանական կամ առողջական օգուտներ։</h3>
      
      <h3 className={styles.subsectionTitle}>15.3 Համաձայն Հայաստանի Հանրապետության օրենսդրության՝</h3>
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
