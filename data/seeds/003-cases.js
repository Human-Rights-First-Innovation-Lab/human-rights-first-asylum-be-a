// * This data was mocked by manually "scraping" PDFs that were provided to us.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cases')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
        {
          id: 'A094-216-526',
          case_url:
            'pdf/125708363-Ferino-Sanchez-Seltik-A094-216-526-BIA-Jan-14-2013.pdf',
          judge_name: 'David W. Crosland',
          court_type: 'Appellate',
          hearing_type: 'Termination',
          refugee_origin: 'Mexico',
          hearing_location: 'Baltimore, MD',
          hearing_date: '1-24-2013',
          decision_date: '1-24-2013',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'true',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'Spanish',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A079-531-484',
          case_url:
            'pdf/125722233-Noe-Cesar-Hernandez-Avila-A079-531-484-BIA-Aug-30-2012.pdf',
          judge_name: 'Patricia A. Cole',
          court_type: 'Appellate',
          hearing_type: 'Termination',
          refugee_origin: 'El Salvador',
          hearing_location: 'Los Angeles, CA',
          hearing_date: '8-30-2012',
          decision_date: '8-30-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'true',
          applicant_language: 'English',
          one_year_guideline: 'true',
          case_status: 'Closed',
          judge_decision: 'Granted',
        },
        {
          id: 'A043-400-049',
          case_url:
            'pdf/127028716-Patrick-Anthony-Brown-A043-400-049-BIA-Dec-18-2012.pdf',
          judge_name: 'David B. Holmes',
          court_type: 'Appellate',
          hearing_type: 'Motion',
          refugee_origin: 'Jamaica',
          hearing_location: 'New York, NY',
          hearing_date: '12-18-2012',
          decision_date: '12-18-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'true',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A088-268-610',
          case_url:
            'pdf/127030786-Joao-Silva-Laudelino-A088-268-610-BIA-Dec-14-2012.pdf',
          judge_name: 'Neil P. Miller',
          court_type: 'Appellate',
          hearing_type: 'Reinstatement of proceedings',
          refugee_origin: '',
          hearing_location: 'Boston, MA',
          hearing_date: '12-14-2012',
          decision_date: '12-14-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: '',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A057-056-1193',
          case_url:
            'pdf/127445747-Nowel-Q-Dela-Cruz-A057-056-093-BIA-Feb-8-2013.pdf',
          judge_name: 'David B. Holmes',
          court_type: 'Appellate',
          hearing_type: 'Reopening',
          refugee_origin: '',
          hearing_location: 'Imperial, CA',
          hearing_date: '2-8-2013',
          decision_date: '2-8-2013',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A071-996-819',
          case_url:
            'pdf/130578801-Fowobi-George-A071-996-819-BIA-Sept-14-2012.pdf',
          judge_name: 'David B. Holmes',
          court_type: 'Appellate',
          hearing_type: 'Appeal',
          refugee_origin: '',
          hearing_location: 'Chicago, IL',
          hearing_date: '9-14-2012',
          decision_date: '9-14-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'true',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
        {
          id: 'A093-138-113',
          case_url:
            'pdf/133809871-Maria-de-Jesus-Ortiz-Mejia-A093-138-113-BIA-Mar-7-2013.pdf',
          judge_name: 'Linda S. Wendtland',
          court_type: 'Appellate',
          hearing_type: 'Suppression; termination',
          refugee_origin: '',
          hearing_location: 'Imperial, CA',
          hearing_date: '3-07-2013',
          decision_date: '3-07-2013',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'true',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
        {
          id: 'A027-392-198',
          case_url:
            'pdf/135034041-Dong-Van-Nguyen-A027-392-198-BIA-Jun-12-2012.pdf',
          judge_name: 'Neil P. Miller',
          court_type: 'Appellate',
          hearing_type: 'Reopening; termination of proceedings',
          refugee_origin: '',
          hearing_location: 'Seattle, WA',
          hearing_date: '6-12-2012',
          decision_date: '6-12-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'true',
          applicant_language: 'Spanish',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
        {
          id: 'A028-803-028',
          case_url:
            'pdf/135169606-Javier-Torres-Ponce-A028-803-028-BIA-Apr-3-2012.pdf',
          judge_name: 'Neil P. Miller',
          court_type: 'Appellate',
          hearing_type:
            'Waiver of inadmissibility under section 212(h) of the Act',
          refugee_origin: '4-3-2013',
          hearing_location: 'San Francisco, CA',
          hearing_date: '4-3-2012',
          decision_date: '4-3-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'true',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A089-207-04',
          case_url:
            'pdf/135613749-Marcelo-Alejandro-Cao-A089-207-044-BIA-Jan-31-2012.pdf',
          judge_name: 'Patricia A. Cole',
          court_type: 'Appellate',
          hearing_type: 'Appeal',
          refugee_origin: '',
          hearing_location: 'Imperial, CA',
          hearing_date: '1-31-2012',
          decision_date: '1-31-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'true',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Sustained',
        },
        {
          id: 'A044-857-956',
          case_url:
            'pdf/137815992-Christopher-Charles-Kerr-A044-857-956-BIA-Dec-15-2011.pdf',
          judge_name: 'Patricia A. Cole',
          court_type: 'Termination',
          hearing_type: 'Reopening',
          refugee_origin: '',
          hearing_location: 'San Antonio, TX',
          hearing_date: '12-15-2011',
          decision_date: '12-15-2011',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Terminated',
        },
        {
          id: 'A095-094-694 ',
          case_url:
            'pdf/139810918-Rony-Rene-Anariba-A095-094-694-BIA-Nov-16-2012.pdf',
          judge_name: 'Charles K. Adkins-Blanch',
          court_type: 'Appellate',
          hearing_type: 'Reopening',
          refugee_origin: '',
          hearing_location: 'Orlando, FL',
          hearing_date: '11-16-2012',
          decision_date: '12-16-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Denied',
        },
        {
          id: 'A076-593-027',
          case_url:
            'pdf/144068181-Eduardo-Yanez-A076-593-027-BIA-Oct-18-2012.pdf',
          judge_name: 'Gary D. Malphrus',
          court_type: 'Appellate',
          hearing_type: 'Termination',
          refugee_origin: 'Mexico',
          hearing_location: 'Arlington, VA',
          hearing_date: '12-14-2012',
          decision_date: '12-14-2012',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'Spanish',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
        {
          id: 'A027-824-163',
          case_url:
            'pdf/145869741-Dung-Tuan-Pham-A027-824-163-BIA-May-30-2013.pdf',
          judge_name: 'John Guendelsberger',
          court_type: 'Appellate',
          hearing_type: 'Termination',
          refugee_origin: '',
          hearing_location: 'New Orleans, LA',
          hearing_date: '5-30-2013',
          decision_date: '5-30-2013',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'true',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'false',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
        {
          id: 'A074-787-749',
          case_url:
            'pdf/130265170-Servando-Pinon-Ramos-A074-787-749-BIA-Feb-28-2013.pdf',
          judge_name: 'David B. Holmes',
          court_type: 'Appellate',
          hearing_type: 'Reopening',
          refugee_origin: '',
          hearing_location: 'Phoenix, AZ',
          hearing_date: '2-28-2013',
          decision_date: '2-28-2013',
          credibility_of_refugee: '',
          determined_applicant_credibility: 'false',
          applicant_access_to_interpreter: '',
          is_applicant_indigenous: 'false',
          applicant_language: 'English',
          one_year_guideline: 'true',
          case_status: 'Closed',
          judge_decision: 'Remanded',
        },
      ]);
    });
};
