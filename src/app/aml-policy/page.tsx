
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
    {
        title: 'General provisions',
        ans: [
            {
                "number": "1.1",
                "text": "These rules of procedure for prevention of money laundering and terrorist financing, and compliance with international sanctions (hereinafter Rules) lay down requirements for screening the Clients (as defined in section 2.3) and Transactions (as defined in section 2.7) in order to prevent entering into deals involving suspected Money Laundering and Terrorist Financing, and to ensure identification and reporting of such."
            },
            {
                "number": "1.2",
                "text": "The obligation to observe the Rules rests with Management Board members and employees of the Provider of service, including temporary staff, agents of the Provider of service who initiate or establish Business Relationship (as defined in section 2.6) (hereinafter all together called the Representative). Every Representative must confirm awareness of the Rules with the signature."
            },
            {
                "number": "1.3",
                "text": "The Rules are primarily based on the regulations of Money Laundering and Terrorist Financing Prevention Act (hereinafter the Act) and DIRECTIVE (EU) 2018/343 (hereinafter 5TH AML Directive)."
            }
        ]

    },
    {
        title: 'Definitions',
        ans: [
            {
              "number": "2.1",
              "term": "Money Laundering",
              "text": "is a set of activities with the property derived from criminal activity or property obtained instead of such property with the purpose to:",
              "details": [
                { "number": "i", "text": "conceal or disguise the true nature, source, location, disposition, movement, right of ownership or other rights related to such property;" },
                { "number": "ii", "text": "convert, transfer, acquire, possess or use such property for the purpose of concealing or disguising the illicit origin of property or of assisting a person who is involved in criminal activity to evade the legal consequences of his or her action;" },
                { "number": "iii", "text": "participation in, association to commit, attempts to commit and aiding, abetting, facilitating and counselling the commission of any of the actions referred to subsections 2.1.i and 2.1.ii." }
              ]
            },
            {
              "number": "2.2",
              "term": "Terrorist Financing",
              "text": "the provision or collection of funds, by any means, directly or indirectly, with the intention that they be used or in the knowledge that they are to be used, in full or in part, in order to carry out any of the offences within the meaning of Articles 1 to 4 of Council Framework Decision 2002/475/JHA.",
              "details": []
            },
            {
              "number": "2.3",
              "term": "International Sanctions",
              "text": "list of non-military measures decided by the European Union, the United Nations, another international organization aimed to maintain or restore peace, prevent conflicts and restore international security, support and reinforce democracy, follow the rule of law, human rights and international law and achieve other objectives of the common foreign and security policy of the European Union.",
              "details": []
            },
            {
              "number": "2.4",
              "term": "Compliance Officer or CO",
              "text": "representative appointed by the Management Board responsible for the effectiveness of the Rules, conducting compliance over the adherence to the Rules and serving as contact person of the FIU.",
              "details": []
            },
            {
              "number": "2.5",
              "term": "RU",
              "text": "Financial Intelligence Unit of any Member State of the European Union.",
              "details": []
            },
            {
              "number": "2.6",
              "term": "Business Relationship",
              "text": "a relationship of the Provider of service established in its economic and professional activities with the Client.",
              "details": []
            },
            {
              "number": "2.7",
              "term": "Transaction",
              "text": "cash flow or payment order or cryptocurrency wiring from a Client to the Provider of service.",
              "details": []
            },
            {
              "number": "2.8",
              "term": "Client",
              "text": "a natural or legal person, who uses services of the Provider of service.",
              "details": []
            },
            {
              "number": "2.9",
              "term": "Beneficial Owner",
              "text": "is a natural person, who:",
              "details": [
                { "number": "i", "text": "Taking advantage of his influence, exercises control over a transaction, operation or another person and in whose interests or favour or on whose account a transaction or operation is performed taking advantage of his influence, makes a transaction, act, action, operation or step or otherwise exercises control over a transaction, act, action, operation or step or over another person and in whose interests or favour or on whose account a transaction or act, action, operation or step is made." },
                { "number": "ii", "text": "Ultimately owns or controls a legal person through direct or indirect ownership of a sufficient percentage of the shares or voting rights or ownership interest in that person, including through bearer shareholdings, or through control via other means. Direct ownership is a manner of exercising control whereby a natural person holds a shareholding of 25 per cent plus one share or an ownership interest of more than 25 per cent in a company. Indirect ownership is a manner of exercising control whereby a company which is under the control of a natural person holds or multiple companies which are under the control of the same natural person hold a shareholding of 25 per cent plus one share or an ownership interest of more than 25 per cent in a company." },
                { "number": "iii", "text": "Holds the position of a senior managing official, if, after all possible means of identification have been exhausted, the person specified in clause ii cannot be identified and there is no doubt that such person exists or where there are doubts as to whether the identified person is a beneficial owner." },
                { "number": "iv", "text": "In the case of a trust, civil law partnership, community or legal arrangement, the beneficial owner is the natural person who ultimately controls the association via direct or indirect ownership or otherwise and is such associations': settlor or person who has handed over property to the asset pool, trustee or manager or possessor of the property, person ensuring and controlling the preservation of property, where such person has been appointed, or the beneficiary, or where the beneficiary or beneficiaries have yet to be determined, the class of persons in whose main interest such association is set up or operates." }
              ]
            },
            {
              "number": "2.10",
              "term": "Politically Exposed Person or PEP",
              "text": "is a natural person who is or who has been entrusted with prominent public functions including a head of state, head of government, minister and deputy or assistant minister; a member of parliament or of a similar legislative body, a member of a governing body of a political party, a member of a supreme court, a member of a court of auditors or of the board of a central bank; an ambassador, a charge d'affaires and a high-ranking officer in the armed forces; a member of an administrative, management or supervisory body of a state-owned enterprise; a director, deputy director and member of the board or equivalent function of an international organization, except middle-ranking or more junior officials.",
              "details": []
            },
            { "number": "2.10.1", "text": "The provisions set out above also include positions in the European Union and in other international organizations." },
                { "number": "2.10.2", "text": "A family member of a person performing prominent public functions is the spouse, or a person considered to be equivalent to a spouse, of a politically exposed person; a child and their spouse, or a person considered to be equivalent to a spouse, of a politically exposed person; a parent of a politically exposed person." },
                { "number": "2.10.3", "text": "A close associate of a person performing prominent public functions is a natural person who is known to be the beneficial owner or to have joint beneficial ownership of a legal person or a legal arrangement, or any other close business relations, with a politically exposed person; and a natural person who has sole beneficial ownership of a legal entity or legal arrangement which is known to have been set up for the de facto benefit of a politically exposed person." },
            {
              "number": "2.11",
              "term": "Local Politically Exposed Person or local PEP",
              "text": "a natural person, provided in section 2.10, who performs or has performed prominent public functions in a contracting state of the European Economic Area, European Free Trade Area, or in an institution of European Union.",
              "details": []
            },
            {
              "number": "2.12",
              "term": "Service Provider",
              "text": "ThreeFourPay Ltd, Boumpoulinas 1, BOUBOULINA BUILDING, 3rd Floor, Flat/Office 31, 1060, Nicosia, Cyprus, registration number HE 431584",
              "details": []
            },
            {
              "number": "2.13",
              "term": "Management Board or MB",
              "text": "management board of the Provider of service. Members of the MB, as appointed by relevant MB decisions, are responsible for implementation of the Rules.",
              "details": []
            },
            {
              "number": "2.14",
              "term": "Equivalent Third Country",
              "text": "means a country not a Member State of European Economic Area but applying an equivalent regime to the European Union corresponding (AML) framework (see also Exhibit 1).",
              "details": []
            },
            {
              "number": "2.15",
              "term": "Virtual currency",
              "text": "a value represented in the digital form, which is digitally transferable, preservable or tradable and which persons accept as a payment instrument, but that is not the legal tender of any country or funds for the purposes of Article 4(25) of Directive (EU) 2015/2366 on Payment Services in the Internal Market or a Payment Transaction for the Purposes of Points (k) and (I) of Article 3 of the same Directive.",
              "details": []
            }
          ]
          

    },
    {
        title: 'Description of activities of the Service Provider',
        ans: [
            {
                "number": "3.1",
                "text": "The Service Provider offers software integration for merchants with payment providers. "
            },
            {
                "number": "3.2",
                "text": "The Service Provider is not a subject of any license. "
            },
        ]

    },
    {
        title: 'Compliance Officer',
        ans: [
            {
                "number": "4.1",
                "text": "The MB shall appoint a CO whose principal tasks are to:",
            },
            {
                "number": "4.1.1",
                "text": "monitor the compliance of the Rules with the relevant laws and compliance of the activity of the Representatives with the procedures established by the Rules;"
            },
            {
                "number": "4.1.2",
                "text": "compile and keep updated the data regarding countries with low tax risk, high and low risk of Money Laundering and Terrorist Financing and economical activities with great exposure to Money Laundering and Terrorist Financing;"
            },
            {
                "number": "4.1.3",
                "text": "carry out training, instruct and update the Representatives on matters pertaining to procedures for prevention of Money Laundering and Terrorist Financing;"
            },
            {
                "number": "4.1.4",
                "text": "report to the MB once a year (or more frequently, if necessary) on compliance with the Rules, and on Transactions with a suspicion of Money Laundering or Terrorist Financing;"
            },
            {
                "number": "4.1.5",
                "text": "collect, process and analyze the data received from the Representatives or Clients concerning suspicious and unusual activities;"
            },
            {
                "number": "4.1.6",
                "text": "collaborate with and report to the FIU on events of suspected Money Laundering or Terrorist Financing, and respond to enquiries of the FIU;"
            },
            {
                "number": "4.1.7",
                "text": "make proposals on remedying any deficiencies identified in the course of checks."
            },
            {
                "number": "4.2",
                "text": "The CO must meet all the requirements, prescribed by the Act, and appointment of the CO shall be coordinated with the FIU. If, as a result of a background check carried out by the FIU, it becomes evident that the CO's credibility is under suspicion due to their previous acts or omissions, the Provider of service may extraordinarily terminate the CO's employment contract due to the loss of credibility."
            },
            {
                "number": "4.3",
                "text": "Tasks of the CO can be performed by a department, therefore provisions of section 4.2 will apply accordingly."
            }
        ]


    },
    {
        title: 'Application of due diligence measures',
        ans: [
            {
                "number": "5.1",
                "term": "Due Diligence Measures",
                "text": "The Service Provider shall determine and take due diligence (hereinafter DD) measures using results of conducted risk assessment (see Section 11), and provisions of national risk assessment, published on official channels of the European Banking Authority, Europol and according to the 4TH AML Directive.",
                "details": []
            },
            {
                "number": "5.2",
                "term": "Attention to Client Activities",
                "text": "The Representatives shall pay special attention to the activities of Clients participating in a Transaction and to circumstances that refer to Money Laundering or Terrorist Financing, including to complex, high-value or unusual Transactions which do not have any reasonable economic purpose.",
                "details": []
            },
            {
                "number": "5.3",
                "term": "Risk-Based DD Measures",
                "text": "Depending on the level of the risk of the Client and/or Transaction and depending on the fact whether the Business Relationship is an existing one or it is about to be established, the Provider of service shall apply enhanced DD measures. The Provider of service shall also apply continuous DD measures to ensure ongoing monitoring of Business Relationships.",
                "details": []
            },
            {
                "number": "5.4",
                "term": "DD Measures and Procedures",
                "text": "DD measures shall include the following procedures:",
                "details": [
                    {
                        "number": "i",
                        "text": "Identifying the Client and verifying its identity using reliable, independent sources, documents or data, including e-identifying."
                    },
                    {
                        "number": "ii",
                        "text": "Identifying and verifying of the representative of the Client and the right of representation."
                    },
                    {
                        "number": "iii",
                        "text": "Identifying the Client's Beneficial Owner."
                    },
                    {
                        "number": "iv",
                        "text": "Assessing and, as appropriate, obtaining information on the purpose of the Business Relationship and the Transaction."
                    },
                    {
                        "number": "v",
                        "text": "Conducting ongoing DD on the Client's business to ensure the Transactions being carried out are consistent with the Provider of service's knowledge of the Client and its source of funds."
                    },
                    {
                        "number": "vi",
                        "text": "Obtaining information whether the Client is a PEP or PEP's family member or PEP's close associate."
                    }
                ]
            },
            {
                "number": "5.5",
                "term": "Establishing Source of Wealth",
                "text": "The Provider of service shall establish the source of wealth of the Client, where appropriate.",
                "details": []
            },
            {
                "number": "5.6",
                "term": "Representative's Right and Obligation",
                "text": "To comply with the DD obligation, the Representatives shall have the right and obligation to:",
                "details": [
                    {
                        "number": "i",
                        "text": "Request appropriate identity documents to identify the Client and its representatives."
                    },
                    {
                        "number": "ii",
                        "text": "Request documents and information regarding the activities of the Client and legal origin of funds."
                    },
                    {
                        "number": "iii",
                        "text": "Request information about Beneficial Owners of a legal person."
                    },
                    {
                        "number": "iv",
                        "text": "Screen the risk profile of the Client/Transaction, select the appropriate DD measures, assess the risk whether the Client or another person linked with the Transaction is or may become involved in Money Laundering or Terrorist Financing."
                    },
                    {
                        "number": "v",
                        "text": "Re-identify the Client or the representative of the Client, if there are any doubts regarding the correctness of the information received in the course of initial identification."
                    },
                    {
                        "number": "vi",
                        "text": "Refuse to participate in or carry out the Transaction if there is any suspicion that the Transaction is linked with Money Laundering or Terrorist Financing, or that the Client or another person linked with the Transaction is or could be involved in Money Laundering or Terrorist Financing."
                    }
                ]
            },
            {
                "number": "5.7",
                "term": "Ongoing Monitoring of Clients and Transactions",
                "text": "The objective of the continuously applied DD measures is to ensure ongoing monitoring of Clients and Transactions. Conducting ongoing monitoring of the Business Relationship includes:",
                "details": [
                    {
                        "number": "i",
                        "text": "Scrutiny of Transactions being carried out to ensure that the Transactions being conducted are consistent with the Provider of service's knowledge of the Client, the business and risk profile of the Client."
                    },
                    {
                        "number": "ii",
                        "text": "Obtaining information on source of funds for Transactions."
                    },
                    {
                        "number": "iii",
                        "text": "Keeping up-to-date the documents, data or information, obtained during taking DD measures."
                    },
                    {
                        "number": "iv",
                        "text": "Paying particular attention to Transactions and Client's conduction, leading to criminal activity or Money Laundering or Terrorist Financing, and clarifying nature, reasons and background of Transactions."
                    },
                    {
                        "number": "v",
                        "text": "Paying particular attention to the Business Relationship or Transactions, if the Client is from or the seat of a Client being a legal person is located in a third country, which is included in the list of risk countries (see Exhibit 1)."
                    }
                ]
            },
            {
                "number": "5.8",
                "term": "Annual Review of Legal Entity Client",
                "text": "Annual review of a Client being a legal entity is carried out regularly once a year. Updated data shall be recorded in the Provider of service's Client database.",
                "details": []
            },
            {
                "number": "5.9",
                "term": "Updating Client Data",
                "text": "The Representative updates the data of a Client, who is either a legal person or a natural person, i.e. takes appropriate DD measures every time when:",
                "details": [
                    {
                        "number": "i",
                        "text": "The Client addresses the Provider of service with the request to amend a long-term contract during the term of its validity."
                    },
                    {
                        "number": "ii",
                        "text": "Upon identification and verification of the information there is reason to suspect that the documents or data gathered earlier are insufficient, have changed or are incorrect. In this case, the Representative may conduct a face-to-face meeting with the Client."
                    },
                    {
                        "number": "iii",
                        "text": "The data pertaining to the Transactions of Client reveal significant changes in the Client's area of activity or business volumes, which warrants amending the Client's risk profile."
                    },
                    {
                        "number": "iv",
                        "text": "The Provider of service has learned through third persons or the media that the activities or data of the Client have changed significantly."
                    }
                ]
            },
            {
                "number": "5.10",
                "term": "Evaluation of Client Activity Purpose",
                "text": "The Representative shall evaluate the substance and the purpose of the Client's activities, in order to establish the possible links of the respective Transaction with Money Laundering or Terrorist Financing. The evaluation should result in an understanding about the purpose of the Business Relationship for the Client, the nature of the Client's business, the risk levels of the Client and, if necessary, the sources of funds related to Transactions.",
                "details": []
            }
            
            
        ]

    },
    {
        title: 'Identification of a person',
        ans: [
            {
                "number": "6.1",
                "term": "Identification Requirements",
                "text": "Upon implementing DD measures the following person shall be identified:",
                "details": [
                    { "number": "i", "text": "Client - a natural or legal person" },
                    { "number": "ii", "text": "Representative of the Client - an individual who is authorized to act on behalf of the Client" },
                    { "number": "iii", "text": "Beneficial Owner of the Client" },
                    { "number": "iv", "text": "PEP - if the PEP is the Client or a person connected with the Client (see Section 2.10)" }
                ]
            },
            {
                "number": "6.2",
                "term": "Verification Process",
                "text": "Upon establishing the relationship with the Client and when carrying out a Transaction, the Provider of service shall identify and verify the Client while being present at the same place as the Client or by using information technology means.",
                "details": []
            },
            {
                "number": "6.3",
                "term": "Digital Identification Methods",
                "text": "For identification of a Client and verification of the identity of a Client by using information technology means, the Provider of service shall use:",
                "details": [
                    { "number": "6.3.1", "text": "A document issued by a Member State of the EU for the purpose of digital identification" },
                    { "number": "6.3.2", "text": "Another electronic identification system within the meaning of the REGULATION (EU) 910/2014. If the Client is a foreign national, the identity document issued by the competent authority of the foreign country is also used simultaneously." }
                ]
            },
            {
                "number": "6.4",
                "term": "Additional Data Requirements",
                "text": "In case of identification of a Client and verification of the identity of a Client by using information technology means, the Provider of service shall additionally obtain data from a reliable and independent source, e.g. identity documents databases.",
                "details": []
            },
            {
                "number": "6.5",
                "term": "Identification of Natural Persons",
                "text": "Identification of a Client being a natural person and a representative of a Client who is a legal person.",
                "details": [
                    { "number": "6.5.1", "text": "Upon establishing a Business Relationship, identification takes place, above all, during a face-to-face meeting or by using information technology means." },
                    { "number": "6.5.2", "text": "Identity of a Client being a natural person, or a representative of a Client who is a legal person must be established each time when a Transaction is carried out." },
                    { "number": "6.5.3", "text": "The Rules must be considered when dealing with the documents that can be used to identify the Client or its representative and the requirements established for them." },
                    { "number": "6.5.4", "text": "Verification must be made whether or not such a person is a PEP." },
                    { "number": "6.5.5", "text": "A new Client and, if necessary, an existing Client shall confirm the correctness of the submitted information and data by signing the Client data registration sheet (see Form 1)." }
                ]
            },
            {
                "number": "6.6",
                "term": "Identification of Legal Persons",
                "text": "Identification of a Client being a legal person.",
                "details": [
                    { "number": "6.6.1", "text": "To identify a Client who is a legal person, the Representative shall take specific actions, including checking information via databases, requesting necessary documents, and verifying the power of attorney." },
                    { "number": "6.6.2", "text": "The document presented for identification of a legal person shall set out business name, registry code, date of registration, seat, address, names, and authorizations of relevant members." },
                    { "number": "6.6.3", "text": "A legal representative of a new Client shall confirm the correctness of the submitted information and data by signing the Client data registration sheet." }
                ]
            },
            {
                "number": "6.7",
                "term": "Consequences of Insufficient Identification",
                "text": "Measures to take if identification of a Client is insufficient.",
                "details": [
                    { "number": "6.7.1", "text": "The Representative shall promptly apply enhanced DD measures, notify the CO, assess the risk profile, and postpone the suspicious Transaction." }
                ]
            },
            {
                "number": "6.8",
                "term": "Identification of the Beneficial Owner",
                "text": "Registration and assessment of the Beneficial Owner(s) of a legal person is mandatory.",
                "details": [
                    { "number": "6.8.1", "text": "The Representative shall gather information about ownership and control structure of the Client." },
                    { "number": "6.8.2", "text": "If documents do not clearly identify the Beneficial Owners, record respective information based on representative statements or documents." },
                    { "number": "6.8.3", "text": "While establishing the Beneficial Owner, rely on information received in a format reproducible in writing from reliable sources." }
                ]
            },
            {
                "number": "6.9",
                "term": "Identification of Politically Exposed Person (PEP)",
                "text": "Measures to establish whether or not a person is a PEP.",
                "details": [
                    { "number": "6.9.1", "text": "The Representative shall ask the Client for necessary information, make enquiries, or check relevant websites." },
                    { "number": "6.9.2", "text": "The decision to establish a Business Relationship with a PEP or a person associated with them will be made by the MB." },
                    { "number": "6.9.4", "text": "To establish a Business Relationship with a PEP, enhanced DD measures, source of wealth, and continual monitoring are required." }
                ]
            },
            {
                "number": "6.10",
                "term": "Documents for Identification",
                "text": "Documents required for identification of natural and legal persons.",
                "details": [
                    { "number": "6.10.1", "text": "For natural persons and representatives, acceptable documents include Personal ID card, passport, or diplomatic passport." },
                    { "number": "6.10.2", "text": "A copy of the page of identity document with personal data and photo is required." },
                    { "number": "6.10.4", "text": "Legal persons must present an extract of a registry card of the commercial register, or equivalent document." }
                ]
            },
            {
                "number": "6.11",
                "term": "Data Recording for Natural Persons",
                "text": "If the Client is a natural person, specific data must be recorded.",
                "details": [
                    { "number": "i", "text": "Name of the Client" },
                    { "number": "ii", "text": "Personal identification code, or if absent, date and place of birth and residence" }
                ]
            },
            {
                "number": "6.12",
                "term": "Data Recording for Legal Persons",
                "text": "If the Client is a legal person, specific data must be recorded.",
                "details": [
                    { "number": "i", "text": "Name of the Client" },
                    { "number": "ii", "text": "Registry code or registration number and date" },
                    { "number": "iii", "text": "Names and authorisations of Management Board members or other relevant body" }
                ]
            }
            
        ]
    },
    {
        title: 'Establishing the purpose and actual substance of a Transaction',
        ans: [
            {
                "number": "7.1",
                "term": "Business Profile Establishment",
                "text": "For the purpose of preventing movement of illegally obtained funds through the Provider of service, it is essential upon entering into a Business Relationship, in addition to identification of the Client, to establish the business profile of the Client, which consists of mapping the main areas of operation and possible payment practices. Notice is to be taken on persons that the Client has transactional relationships with, and their location.",
                "details": []
            },
            {
                "number": "7.2",
                "term": "Client's Economic Activity Assessment",
                "text": "It is necessary to bear in mind that certain circumstances, which are suspicious or unusual for one Client, could constitute a part of normal economic activities of another. Establishing the area of activity, work, or profession of a Client allows assessing whether or not the Business Relationship or the Transactions are in conformity with the Client's normal participation in commerce, and whether the Business Relationship or the Transaction has an understandable economic reason for the Client.",
                "details": []
            },
            {
                "number": "7.3",
                "term": "Screening for Suspicious or Unusual Transactions",
                "text": "In order to screen out suspicious or unusual Transactions and the purpose and actual substance of a Transaction, the Representative shall take the following actions:",
                "details": [
                    { "number": "1", "text": "If necessary, ask the Client to provide (additional) information about the professional or economic activities." },
                    { "number": "2", "text": "If necessary, ask the Client explanations about the reasons for the Transaction and, if necessary, documents evidencing the origin of the assets and/or source of wealth." },
                    { "number": "3", "text": "Be particularly attentive to Transactions linked with natural or legal persons from countries where it is difficult to obtain information about the Client, or from states that do not sufficiently contribute to the prevention of Money Laundering (see Exhibit 1)." },
                    { "number": "4", "text": "Client's death." }
                ]
            }
            
        ]
    },
    {
        title: 'Enhanced due diligence measures',
        ans: [
            {
              "number": "8.1",
              "term": "Enhanced Due Diligence",
              "text": "Enhanced DD measures must be taken in cases where the risk level of the Client or Transaction is higher (e.g. European Union cross-border Transactions, Transactions where the Client has no apparent need for it or link with the Transaction etc.).",
              "details": []
            },
            {
              "number": "8.2",
              "term": "Client Risk Profile",
              "text": "The Representative shall establish the Client's risk profile and determine the risk category in accordance with the Rules (see Section 11). The risk category may be altered during the course of the Business Relationship, taking into consideration the changes in data gathered. The Client's risk profile shall be assessed before each next Transaction exceeding 15,000 euros and the appropriate DD measures shall be taken.",
              "details": []
            },
            {
              "number": "8.3",
              "term": "High-Risk Characteristics",
              "text": "The Representative, who upon entering into a Business Relationship with a new Client or carrying out a new Transaction into or from an existing Client, detects that there is at least one of the following high-risk characteristics present in respect of a Client, shall consult with and report to the CO, and shall take the DD measures set out in the Rules.",
              "details": []
            },
            {
              "number": "8.4",
              "term": "Situations Requiring Enhanced Due Diligence",
              "text": "The Representative shall apply enhanced DD measures in the following situations:",
              "details": [
                {
                  "number": "8.4.1",
                  "text": "Suspicion regarding truthfulness of the provided data and/or authenticity of the identification documents regarding the Client or its Beneficial Owners."
                },
                {
                  "number": "8.4.2",
                  "text": "The Client is a PEP (excluding local PEPs, if there are no relevant circumstances, leading to the higher risks)."
                },
                {
                  "number": "8.4.3",
                  "text": "The Client is from or the seat of a Client being a legal person is located in a third country, which is included in the list of risk countries (see Exhibit 1)."
                },
                {
                  "number": "8.4.4",
                  "text": "In case of unusually large Transactions and unusual patterns of Transactions, which have no apparent economic or lawful purpose."
                },
                {
                  "number": "8.4.5",
                  "text": "In a situation with higher risk of Money Laundering and terrorists financing as described in Sections 10.1 and 10.3."
                }
              ]
            },
            {
              "number": "8.5",
              "term": "Enhanced Due Diligence Measures",
              "text": "Enhanced DD measures shall include at least all the following measures",
              "details": []
            },
            {
              "number": "8.6",
              "term": "Client Identification and Verification",
              "text": "Identification and verification of a Client on the basis of additional documents, data or information, which originates from a reliable and independent source.",
              "details": [
                {
                  "number": "8.6.1",
                  "text": "Identification and verification of a Client while being present at the same place."
                },
                {
                  "number": "8.6.2",
                  "text": "Asking the identification or verification documents to be notarised or officially authenticated."
                },
                {
                  "number": "8.6.3",
                  "text": "Obtaining additional information on the purpose and nature of the Business Relationship and Transactions and verification from a reliable and independent source."
                },
                {
                  "number": "8.6.4",
                  "text": "Obtaining additional information on the source of funds of Transactions."
                },
                {
                  "number": "8.6.5",
                  "text": "Accepting the first payment relating to a Transaction through an account opened in the name of Client in a credit institution which has its place of business in a contracting state of the European Economic Area or in an Equal Third Country."
                },
                {
                  "number": "8.6.6",
                  "text": "Reassessment of a risk profile of a Client not later than 6 months after establishment of Business Relationship."
                }
              ]
            },
            {
              "number": "8.7",
              "term": "Decision on Business Relationship Continuation",
              "text": "After taking enhanced DD measures, the MB shall decide whether to establish or continue the Business Relationship with the Client in respect of whom the enhanced DD measures were taken.",
              "details": []
            },
            {
              "number": "8.8",
              "term": "PEP Transactions Due Diligence",
              "text": "In case of Transactions of the PEP the Representative shall apply the following DD measures:",
              "details": [
                {
                  "number": "8.8.1",
                  "text": "Obtain the MB approval for establishing or continuing Business Relationship with such person."
                },
                {
                  "number": "8.8.2",
                  "text": "Take adequate measures to establish the source of wealth and source of funds that are involved in Business Relationship or Transactions."
                },
                {
                  "number": "8.8.3",
                  "text": "Conduct enhanced, ongoing monitoring of this Business Relationship."
                }
              ]
            }
          ]
          
    },
    {
        title: 'Risk assessment',
        ans: [
            {
              "number": "9.1",
              "term": "Establishing Client Risk Profile",
              "text": "The Representative will establish a risk profile of a Client based on information gathered under the Rules.",
              "details": []
            },
            {
              "number": "9.2",
              "term": "Risk Categories",
              "text": "The Provider of service applies the following risk categories: Normal risk (no high-risk characteristics), High risk I, and High risk II.",
              "details": []
            },
            {
              "number": "9.3",
              "term": "Recording High-Risk Clients",
              "text": "For every Client not in the 'normal risk' category, the Representative records the Client’s risk category as 'High risk I' or 'High risk II' in the Provider of service's database. Only the CO has the authority to change a Client's risk category.",
              "details": []
            },
            {
              "number": "9.4",
              "term": "Risk Assessment of Natural Persons",
              "text": "Criteria for assessing risk of natural persons include country of residence, Transaction beneficiaries, Client’s operating region, and PEP status.",
              "details": [
                {
                  "number": "9.4.1",
                  "text": "When establishing the risk category of a natural person, take into account country of residence, beneficiaries, Client’s operating region, and PEP status."
                },
                {
                  "number": "9.4.2",
                  "text": "If a Client exhibits several 'High risk I' characteristics, or one 'High risk II' characteristic along with 'High risk I', they are categorized as 'High risk II'."
                },
                {
                  "number": "9.4.3",
                  "text": "Characteristics of high risk in natural persons and corresponding DD measures are specified by categories."
                }
              ]
            },
            {
              "number": "9.5",
              "term": "Risk Assessment of Legal Persons",
              "text": "Risk assessment criteria for legal persons include country of location, activity area, ownership transparency, and management.",
              "details": [
                {
                  "number": "9.5.1",
                  "text": "Risk assessment of a legal person is based on country of location, activity area, ownership transparency, and management."
                },
                {
                  "number": "9.5.2",
                  "text": "If several 'High risk I' characteristics are present, or one 'High risk II' characteristic is present along with 'High risk I', the Client is categorized as 'High risk II'."
                },
                {
                  "number": "9.5.3",
                  "text": "Characteristics of high risk in legal persons and corresponding DD measures are categorized accordingly."
                }
              ]
            },
            {
              "number": "9.6",
              "term": "Combining DD Measures",
              "text": "The listed DD measures can be combined as necessary for various risks.",
              "details": []
            },
            {
              "number": "9.7",
              "term": "Risk Management in Technology and Services",
              "text": "Details technological, physical, and personal measures for secure service provision, including encryption, monitoring, and two-factor authentication.",
              "details": [
                {
                  "number": "9.7.1",
                  "text": "Provider uses secure technological solutions, including audited freeware, cloud services, and CTO-secured keys."
                },
                {
                  "number": "9.7.2",
                  "text": "Provider implements modular system isolation, encrypted module communications, and intrusion detection."
                },
                {
                  "number": "9.7.3",
                  "text": "Authorization involves SSL encryption, two-factor authentication, and encrypted key storage separate from users."
                },
                {
                  "number": "9.7.4",
                  "text": "In case of hacking, multi-layered security measures include log isolation, encrypted backups, and DDOS protection."
                },
                {
                  "number": "9.7.5",
                  "text": "Virtual currency holding limits are managed based on verification level, with secure storage in cold wallets."
                },
                {
                  "number": "9.7.6",
                  "text": "Security responsibility is assigned to the service provider’s team, who monitors and reports threats to the MB."
                },
                {
                  "number": "9.7.7",
                  "text": "Provider systematically reviews need for additional security measures."
                }
              ]
            },
            {
              "number": "9.8",
              "term": "Suspicious and Unusual Transactions",
              "text": "Representative assesses transactions for unusual characteristics and potential signs of Money Laundering or Terrorist Financing.",
              "details": [
                {
                  "number": "9.8.1",
                  "text": "Identify and assess unusual transactions by comparing them to the Client’s known profile and standard activity."
                },
                {
                  "number": "9.8.2",
                  "text": "Request explanations and supporting documents from Clients for unusual or suspicious transactions."
                },
                {
                  "number": "9.8.3",
                  "text": "Record all known details of suspicious transactions."
                },
                {
                  "number": "9.8.4",
                  "text": "Key aspects to analyze include suspicious activities, identification process compliance, and completeness of Client-provided information."
                }
              ]
            },
            {
              "number": "9.9",
              "term": "Prohibited Transactions",
              "text": "Certain characteristics make a transaction prohibited unless approved by the MB.",
              "details": [
                {
                  "number": "9.9.1",
                  "text": "Client lacks or has unclear authorizations for the transaction."
                },
                {
                  "number": "9.9.2",
                  "text": "Transaction lacks a justified purpose for the Client."
                },
                {
                  "number": "9.9.3",
                  "text": "Unclear or complex control structures in Client’s organization."
                },
                {
                  "number": "9.9.4",
                  "text": "Client’s economic or payment practices lack transparency."
                },
                {
                  "number": "9.9.5",
                  "text": "Client appears to be a fictitious entity."
                },
                {
                  "number": "9.9.6",
                  "text": "Beneficial ownership of legal person cannot be established."
                },
                {
                  "number": "9.9.7",
                  "text": "Client refuses to provide required transaction details."
                },
                {
                  "number": "9.9.8",
                  "text": "Client fails to prove the legal origin of assets."
                },
                {
                  "number": "9.9.9",
                  "text": "Client or associated party linked to organized crime, money laundering, or terrorism."
                },
                {
                  "number": "9.9.10",
                  "text": "Client or associated party connected to traditional organized crime income sources."
                },
                {
                  "number": "9.9.11",
                  "text": "Client or associated party under international sanctions."
                },
                {
                  "number": "9.9.12",
                  "text": "Client has nominee shareholders or bearer shares."
                }
              ]
            }
          ]
          
    },
    {
        title: 'Registration and storage of data',
        ans: [
            {
                "number": "10.1",
                "term": "Registration in Client Database",
                "text": "The Representative shall ensure that Client and Transaction data are registered in the Provider of service's Client database within the required scope.",
                "details": []
            },
            {
                "number": "10.2",
                "term": "Registration of Data for Natural Person",
                "text": "Registration of data of a Client who is a natural person",
                "details": [
                    {
                        "number": "10.2.1",
                        "text": "The following obtained data shall be recorded in the Provider of service's information system:"
                    },
                    {
                        "number": "10.2.1.i",
                        "text": "Birth and the address of the person's permanent place of residence and other places of residence."
                    },
                    {
                        "number": "10.2.1.ii",
                        "text": "Name and number of the document used for identification, its date of issue, and the issuing authority."
                    },
                    {
                        "number": "10.2.1.iii",
                        "text": "Occupation, profession, or area of activity."
                    },
                    {
                        "number": "10.2.1.iv",
                        "text": "Record information about public functions if the person performs or has performed them."
                    },
                    {
                        "number": "10.2.1.v",
                        "text": "Citizenship and tax residency."
                    },
                    {
                        "number": "10.2.1.vi",
                        "text": "Origin of assets."
                    },
                    {
                        "number": "10.2.2",
                        "text": "In case of a representative, the following information shall be recorded."
                    },
                    {
                        "number": "10.2.2.i",
                        "text": "Information as provided in points i-ii of Section 10.2.1."
                    },
                    {
                        "number": "10.2.2.ii",
                        "text": "Document details used for establishing representation."
                    },
                    {
                        "number": "10.2.3",
                        "text": "If the Business Relationship is established with an ID card or e-identification, data is saved digitally."
                    }
                ]
            },
            {
                "number": "10.3",
                "term": "Registration of Data for Legal Person",
                "text": "Registration of data of a Client who is a legal person",
                "details": [
                    {
                        "number": "10.3.1",
                        "text": "The following information on the Client being a legal person shall be recorded:"
                    },
                    {
                        "number": "10.3.1.i",
                        "text": "Name, legal form, registry code, address, date of registration, and activity locations."
                    },
                    {
                        "number": "10.3.1.ii",
                        "text": "Communication means and contact persons."
                    },
                    {
                        "number": "10.3.1.iii",
                        "text": "Names and powers of management board members and their PEP status."
                    },
                    {
                        "number": "10.3.1.iv",
                        "text": "Information about the Beneficial Owners."
                    },
                    {
                        "number": "10.3.1.v",
                        "text": "Field(s) of activity (NACE codes)."
                    },
                    {
                        "number": "10.3.1.vi",
                        "text": "Document details used for identity verification."
                    },
                    {
                        "number": "10.3.1.vii",
                        "text": "Country of tax residency (VAT number)."
                    },
                    {
                        "number": "10.3.1.viii",
                        "text": "Date of registration in the Provider of service's database."
                    },
                    {
                        "number": "10.3.1.ix",
                        "text": "Purpose of the Business Relationship."
                    },
                    {
                        "number": "10.3.1.x",
                        "text": "Origin of assets."
                    },
                    {
                        "number": "10.3.1.xi",
                        "text": "Expected Transactions with Client, amounts, and geographical region."
                    },
                    {
                        "number": "10.3.2",
                        "text": "Information about the Beneficial Owner to be recorded."
                    },
                    {
                        "number": "10.3.2.i",
                        "text": "Name, personal ID code, or date of birth and place of residence."
                    },
                    {
                        "number": "10.3.2.ii",
                        "text": "Type of control over the enterprise."
                    },
                    {
                        "number": "10.3.2.iii",
                        "text": "PEP status."
                    },
                    {
                        "number": "10.3.2.iv",
                        "text": "Information about the representative."
                    },
                    {
                        "number": "10.3.3",
                        "text": "If Business Relationship is established by representative, data saved automatically."
                    },
                    {
                        "number": "10.3.5",
                        "text": "Information from the B-card shall be recorded on Client data sheet or contract."
                    },
                    {
                        "number": "10.3.6",
                        "text": "Information about the Transaction shall be recorded."
                    }
                ]
            },
            {
                "number": "10.4",
                "term": "Special Cases",
                "text": "The Representative shall record all relevant data.",
                "details": [
                    {
                        "number": "10.4.1",
                        "text": "Data regarding refusal to establish Business Relationship or carry out a Transaction."
                    },
                    {
                        "number": "10.4.2",
                        "text": "Data on impossibility to take DD measures due to IT means."
                    },
                    {
                        "number": "10.4.3",
                        "text": "Data on termination of Business Relationship due to impossibility to take DD measures."
                    }
                ]
            },
            {
                "number": "10.5",
                "term": "Data Storage",
                "text": "Details on data storage requirements.",
                "details": [
                    {
                        "number": "i",
                        "text": "Data stored in a format accessible by Provider staff."
                    },
                    {
                        "number": "ii",
                        "text": "Transaction data reported to the Fill accessible only to MB."
                    },
                    {
                        "number": "iii",
                        "text": "Identification documents stored for at least five years after termination."
                    },
                    {
                        "number": "iv",
                        "text": "Transaction documents and data basis for reporting obligations stored for five years."
                    },
                    {
                        "number": "v",
                        "text": "Digital identification data stored for five years after termination."
                    },
                    {
                        "number": "vi",
                        "text": "Data on manner, time, and place of updates; identity of the Representative."
                    }
                ]
            }
        ]
        
    },
    {
        title: 'Reporting of suspicious Transactions',
        ans: [
            {
                "number": "11.1",
                "term": "Notification of the CO",
                "text": "The Representative shall notify the CO if any unusual or suspicious circumstances are identified.",
                "details": [
                    {
                        "number": "11.1.1",
                        "text": "Notification to the CO for unusual or suspicious activities related to Money Laundering or Terrorist Financing."
                    },
                    {
                        "number": "11.1.2",
                        "text": "The CO shall analyze the information and forward it to the MB."
                    }
                ]
            },
            {
                "number": "11.2",
                "term": "Notification of FIU",
                "text": "Details for reporting Transactions to FIU in case of suspected Money Laundering or Terrorist Financing.",
                "details": [
                    {
                        "number": "11.2.1",
                        "text": "CO shall analyze information before reporting a suspicious Transaction to FIU, considering Client's activity and payment practices."
                    },
                    {
                        "number": "11.2.2",
                        "text": "CO decides on forwarding information to FIU; MB decides on Transaction postponement or termination."
                    },
                    {
                        "number": "11.2.3",
                        "text": "If suspending a Transaction could cause harm, it shall proceed, and FIU will be notified afterwards."
                    },
                    {
                        "number": "11.2.4",
                        "text": "CO shall mark 'AML' on Client records and notify FIU within 2 business days of suspicious activities."
                    },
                    {
                        "number": "11.2.5",
                        "text": "Notify FIU of Transactions over 32,000 euros in cash or equivalent, whether single or multiple payments."
                    },
                    {
                        "number": "11.2.6",
                        "text": "If an 'AML' notation exists, Transactions require MB's prior consent."
                    },
                    {
                        "number": "11.2.7",
                        "text": "CO shall store reports on suspicious Transactions, including all related information and documents, in a reproducible format."
                    },
                    {
                        "number": "11.2.8",
                        "text": "Client and participants in reported Transactions must not be informed of the report to FIU."
                    },
                    {
                        "number": "11.2.9",
                        "text": "Third parties, including other Representatives, shall not be informed of FIU reports, except for MB and CO."
                    }
                ]
            },
            {
                "number": "11.3",
                "term": "Termination of Business Relationship",
                "text": "Conditions for terminating the Business Relationship with a Client due to suspected Money Laundering or Terrorist Financing.",
                "details": [
                    {
                        "number": "11.3.1",
                        "text": "Provider must terminate Business Relationship without notice if Client fails to provide accurate information or is involved in Money Laundering or Terrorist Financing."
                    },
                    {
                        "number": "11.3.1.i",
                        "text": "Client fails to present data for identification or update."
                    },
                    {
                        "number": "11.3.1.ii",
                        "text": "Incomplete or inaccurate information during DD measures."
                    },
                    {
                        "number": "11.3.1.iii",
                        "text": "Client does not provide documents showing lawful economic activities or origin of funds."
                    },
                    {
                        "number": "11.3.1.iv",
                        "text": "Client uses fictitious persons in Transactions."
                    },
                    {
                        "number": "11.3.1.v",
                        "text": "Provider suspects Client’s involvement in Money Laundering or Terrorist Financing."
                    },
                    {
                        "number": "11.3.1.vi",
                        "text": "Submitted documents do not resolve Provider's suspicions of Money Laundering or Terrorist Financing links."
                    },
                    {
                        "number": "11.3.2",
                        "text": "Decision to terminate Business Relationship and Transaction execution shall be taken by the MB with CO's proposal."
                    },
                    {
                        "number": "11.3.3",
                        "text": "Client shall be notified of termination in writing, with 'AML' notation if applicable."
                    }
                ]
            },
            {
                "number": "11.4",
                "term": "Indemnification of Representatives",
                "text": "Indemnification rules for Representatives when performing duties in compliance with Rules.",
                "details": [
                    {
                        "number": "11.4.1",
                        "text": "Provider and Representatives are not liable for damage from delay or cancellation if acting on good faith reporting of Money Laundering or Terrorist Financing."
                    },
                    {
                        "number": "11.4.2",
                        "text": "Good faith fulfillment of notification obligations does not constitute a breach of confidentiality, nor shall liability be imposed."
                    }
                ]
            }
        ]
        
    },
    {
        title: 'Implementation of International Sanctions',
        ans: [
            {
              "number": "12.1",
              "term": "Requirement to Implement Sanctions",
              "text": "The Provider of service is required to implement International Sanctions in force.",
              "details": []
            },
            {
              "number": "12.2",
              "term": "Attention to Client Sanctions",
              "text": "Representatives shall draw special attention to all its Clients (present and new), to the activities of the Clients and to the facts which refer to the possibility that the Client is a subject to International Sanctions. Control and verification of possibly imposed International Sanctions shall be conducted by the Representatives as part of DD measures applied to the Clients in accordance with these Rules.",
              "details": []
            },
            {
              "number": "12.3",
              "term": "Notification of CO on Client Sanctions",
              "text": "The Representatives who have doubts or who know that a Client is subject to International Sanctions, shall immediately notify the CO. In case of doubt, if the CO finds it appropriate, the Representative shall ask the Client to provide additional information that may help to identify whether he/she is subject to International Sanctions or not.",
              "details": []
            },
            {
              "number": "12.4",
              "term": "CO Responsibilities for Sanctions",
              "text": "The CO shall be responsible for the implementation of International Sanctions.",
              "details": [
                {
                  "number": "12.4.1",
                  "text": "The CO shall regularly follow guidelines of the European Banking Authority (EBA) and of Europol, in addition to relevant domestic guidelines in the EU Member States."
                },
                {
                  "number": "12.4.2",
                  "text": "The CO shall immediately take measures provided for in the act on the imposition or implementation of International Sanctions."
                },
                {
                  "number": "12.4.3",
                  "text": "Upon entry into force of an act on International Sanctions or its amendment, repeal, or expiry, the CO shall immediately check whether any of the Clients is subject to International Sanctions."
                },
                {
                  "number": "12.4.4",
                  "text": "If an act on International Sanctions is repealed, expires, or is amended such that the sanctions are terminated wholly or partially, the CO shall terminate the measure to the extent provided."
                },
                {
                  "number": "12.4.5",
                  "text": "The CO shall keep an updated record of subjects of International Sanctions and submit this information to the Representatives."
                },
                {
                  "number": "12.4.6",
                  "text": "The CO shall provide training to Representatives on identifying subjects of International Sanctions."
                },
                {
                  "number": "12.4.7",
                  "text": "The CO shall assist Representatives who have doubts or knowledge that a Client is subject to International Sanctions."
                },
                {
                  "number": "12.4.8",
                  "text": "The CO shall supervise the Representatives’ application of the Rules regarding International Sanctions."
                },
                {
                  "number": "12.4.9",
                  "text": "The CO shall review and update the Rules on implementing International Sanctions."
                },
                {
                  "number": "12.4.10",
                  "text": "The CO shall notify relevant parties if a Client is subject to International Sanctions or there are doubts about it."
                },
                {
                  "number": "12.4.11",
                  "text": "The CO shall keep records of checks, notifications, and measures applied for detected subjects of International Sanctions."
                }
              ]
            },
            {
              "number": "12.5",
              "term": "Record and Retention of Inspection Data",
              "text": "When making checks on Clients to detect whether they are subject to International Sanctions, the following information shall be recorded and preserved for five years.",
              "details": [
                {
                  "number": "12.5.1",
                  "text": "Time of inspection."
                },
                {
                  "number": "12.5.2",
                  "text": "Name of person who carried out the inspection."
                },
                {
                  "number": "12.5.3",
                  "text": "Results of inspection."
                },
                {
                  "number": "12.5.4",
                  "text": "Measures taken."
                }
              ]
            },
            {
              "number": "12.6",
              "term": "Notification on Detected Clients under Sanctions",
              "text": "If during a check, it is detected that a Client or former Client is subject to International Sanctions, the CO shall notify the Representatives involved, the Management Board, and relevant authorities. Notification shall be reproducible in writing.",
              "details": []
            },
            {
              "number": "12.7",
              "term": "Client Awareness Restriction",
              "text": "The Client who is subject to International Sanctions and about whom the notification is made, shall not be informed of the notification.",
              "details": []
            },
            {
              "number": "12.8",
              "term": "Authorization for Special Measures",
              "text": "Special measures and sanctions on a Client detected to be subject to International Sanctions should be authorized by the relevant authority.",
              "details": []
            },
            {
              "number": "12.9",
              "term": "Consideration of Distorting Factors in Checks",
              "text": "When making checks of Clients, possible distorting factors in personal information (e.g., name variations) must be considered.",
              "details": []
            }
          ]
          
    },
    {
        title: 'Training',
        ans: [
            {
              "number": "13.1",
              "term": "Training and Information for Representatives",
              "text": "The Provider of service shall ensure that all Representatives who have contacts with Clients or matters involving Money Laundering are provided with regular training and information about the nature of the Money Laundering and Terrorist Financing risks, as well as any new trends within the field. The CO shall arrange regular training concerning prevention of Money Laundering and Terrorist Financing to explain the respective requirements and obligations.",
              "details": []
            },
            {
              "number": "13.3",
              "term": "Initial Training Requirement",
              "text": "Initial training is provided at the start of representative's service. The Representatives who are communicating with the Clients directly may not start working before they have reviewed and committed to the adherence of these Rules or participated in the Money Laundering and Terrorist Financing prevention training.",
              "details": []
            },
            {
              "number": "13.4",
              "term": "Regular Training Frequency",
              "text": "Training is provided regularly, at least once a year, to all Representatives and other relevant designated staff of the Provider of service. Training may be provided also using electronic means (conference calls, continuous e-mail updates provided confirmation on receipt and acceptance is returned and similar means).",
              "details": []
            },
            {
              "number": "13.5",
              "term": "Training Materials Retention",
              "text": "Training materials and information shall be stored for at least three years.",
              "details": []
            }
          ]
          
    },
    {
        title: 'Internal audit and amendment of the Rules',
        ans: [
            {
              "number": "14.1",
              "term": "Compliance Inspection",
              "text": "Compliance with the Rules shall be inspected at least once a year by the CO, whose job duties are set out in Section 4.1.",
              "details": []
            },
            {
              "number": "14.2",
              "term": "Inspection Report Contents",
              "text": "The report on the results of the inspection concerning the compliance with the measures for prevention of Money Laundering and Terrorist Financing shall set out the following information:",
              "details": [
                { "number": "i", "text": "Time of the inspection." },
                { "number": "ii", "text": "Name and position of the person conducting the inspection." },
                { "number": "iv", "text": "Purpose and description of the inspection." },
                { "number": "v", "text": "Analysis of the inspection results, or the conclusions drawn on the basis of the inspection." }
              ]
            },
            {
              "number": "14.3",
              "term": "Deficiencies in the Rules or Implementation",
              "text": "If the inspection reveals any deficiencies in the Rules or their implementation, the report shall set out the measures to be applied to remedy the deficiencies, as well as the respective time schedule and the time of a follow-up inspection.",
              "details": []
            },
            {
              "number": "14.4",
              "term": "Follow-Up Inspection Report",
              "text": "If a follow-up inspection is carried out, the results of the follow-up inspection shall be added to the inspection report, which shall state the list of measures to remedy any deficiencies discovered in the course of the follow-up inspection, and the time actually spent on remedying the same.",
              "details": []
            },
            {
              "number": "14.5",
              "term": "Inspection Report Review",
              "text": "The inspection report shall be presented to the MB, who shall decide on taking measures to remedy any deficiencies discovered.",
              "details": []
            }
          ]
          
    },
];




export default function AmlPolicy() {



    return (
        <main>
            <div className=" container section">
                <h2 className="heading-2 text-center">Anti-Money Laundering Policy</h2>
                {
                    data?.map((item, idx) => (
                        <Accordion key={idx} type="single" collapsible className="w-full">
                            <AccordionItem value={item.title}>
                                <AccordionTrigger className="text-[18px]">{item.title}</AccordionTrigger>
                                <AccordionContent className="text-[#333] font-normal text-base">
                                    {
                                        item?.ans?.map((item, idx) => (
                                            <div key={idx} className="py-3">
                                                <p><strong>{item.number}</strong> {item?.term} {item?.text}</p>
                                                <ul className="p-2">
                                                    {
                                                        item?.details?.map((item: any, idx: number) => (
                                                            <li key={idx} className="pb-2">
                                                                <strong>{item.number} </strong> {item?.text}
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        ))
                                    }
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    ))
                }

            </div>
        </main>
    )
}