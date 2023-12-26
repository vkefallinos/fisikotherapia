import { physiotherapist, therapyMethods } from 'schemas/types'

import { getClient } from './sanity.client'
import {
  Condition,
  ConditionCategory,
  Education,
  License,
  Physiotherapist,
  TherapyMethod,
  WorkExperience,
} from './sanity.queries'

const CV = `Βιογραφικό Τζανίνης Βασίλης 
Γεννήθηκε στην Αθήνα το 1987 σπούδασε στα τεφαα Αθήνας με ειδικότητες κωπηλάσιας και ειδικής αγωγής. Σπούδασε στο ΠΑΔΑ (πρώην τει Αθήνας)  στο τμήμα φυσικοθεραπείας . υπήρξε 4ος παγκόσμιος πρωταθλητής στην κωπηλάσια και αργότερα εργάσθηκε  ως προπονητής στην εθνική ομάδα της κωπηλάσιας . εργάζεται ως φυσικοθεραπευτής και έχει αντιμετωπίσει πλήθος ασθενών και παθήσεων. Είναι μέλος στον πανελλήνιο σύλλογο φυσικοθεραπευτών .
Διαθέτει άδεια ασκήσεως επαγγέλματος και ειναι συμβεβλημένος με τον ΕΟΠΥΥ.

Παθήσεις :
Μυοσκελετικές παθήσεις ( άλγος στον αυχένα , οσφύ , άνω και κάτω άκρο ) 
Μετεγχειρητική αποκατάσταση
Νευρολογικές παθήσεις (αγγειακό εγκεφαλικό επεισόδιο, παρκινσον, πολλαπλή σκλήρυνση κτλπ)
Αναπνευστικές παθήσεις
Αθλητικες κακωσεις 
Ημικρανίες
Μέθοδοι  παρέμβασης 
Έπειτα από αξιολόγηση εφαρμόζεται εξατομικευμένο πρόγραμμα φυσικοθεραπείας, για τη βελτιωση της καθημερινης ζωης και λειτουργικοτητας του ασθενη με τεχνικές manual, trigger point release , ενδυνάμωση, κινησιοθεραπεία, κινητοποίηση αρθρώσεων  .  
 Επικοινωνια 
Τηλ : 6936739972
Email : vasilistzaninis@hotmail.com`

export const demoPhysio = {
  _id: 'physio123',
  _type: 'physiotherapist',
  name: 'Τζανίνης Βασίλης',
  email: 'vasilistzaninis@hotmail.com',
  phone: '6936739972',
  education: [
    {
      _id: 'edu1',
      _type: 'education',
      institution: 'ΤΕΦΑΑ Αθήνας',
      area: 'Κωπηλασία',
      startDate: '2005-09-01',
      endDate: '2009-06-30',
      grade: 'Πτυχίο',
    },
    {
      _id: 'edu2',
      _type: 'education',
      institution: 'ΤΕΙ Αθήνας',
      area: 'Φυσικοθεραπεία',
      startDate: '2010-09-01',
      endDate: '2014-06-30',
      grade: 'Πτυχίο',
    },
  ],
  workExperience: [
    {
      _id: 'exp1',
      _type: 'workExperience',
      company: 'Εθνική Ομάδα Κωπηλασίας',
      position: 'Προπονητής',
      startDate: '2009-09-01',
      endDate: '2015-06-30',
    },
  ],

  licenses: [
    {
      _id: 'lic1',
      _type: 'license',
      licenseType: 'Άδεια Ασκήσεως Επαγγέλματος Φυσικοθεραπευτή',
      licensingBody: 'Υπουργείο Υγείας',
      licenseNumber: '1234',
      issueDate: '2014-07-01',
      expiryDate: '',
    },
  ],

  skills: [
    {
      _id: 'method1',
      _type: 'therapyMethod',
    },
    {
      _id: 'method2',
      _type: 'therapyMethod',
    },
    {
      _id: 'method3',
      _type: 'therapyMethod',
    },
    {
      _id: 'method4',
      _type: 'therapyMethod',
    },
    {
      _id: 'method5',
      _type: 'therapyMethod',
    },
  ],

  conditions: [],

  slug: 'vasilis-tzaninis',
}

const conditionCategories: ConditionCategory[] = [
  {
    _id: 'cat1',
    _type: 'conditionCategory',
    name: 'Μυοσκελετικά',
    description:
      'Τα μυοσκελετικά προβλήματα αφορούν το σύστημα μυών και οστών του ανθρώπινου σώματος.',
    article: `
Τα μυοσκελετικά προβλήματα αφορούν το σύστημα μυών και οστών του ανθρώπινου σώματος. Περιλαμβάνουν μια ποικιλία καταστάσεων και παθήσεων που επηρεάζουν τους μυς, τα οστά, τις αρθρώσεις, τους συνδέσμους, τις τένοντες και τα νεύρα. Αυτά τα προβλήματα μπορούν να προκύψουν από τραυματισμούς, φθορά λόγω ηλικίας, χρόνιες παθήσεις όπως η αρθρίτιδα, ή μπορεί να είναι συγγενείς.

Μερικά από τα πιο συνηθισμένα μυοσκελετικά προβλήματα περιλαμβάνουν:

Αρθρίτιδα: Ένας όρος που περιγράφει πάνω από 100 διαφορετικές παθήσεις που προκαλούν πόνο και φλεγμονή στις αρθρώσεις.
Οστεοπόρωση: Μια κατάσταση που προκαλεί τα οστά να γίνουν αδύναμα και εύθραυστα.
Ρήξη μηνίσκου: Κοινός τραυματισμός στο γόνατο που συμβαίνει συχνά σε αθλητές.
Τενοντίτιδα: Φλεγμονή ή ερεθισμός ενός τένοντα, συνήθως λόγω υπερχρήσης ή επαναλαμβανόμενης κίνησης.
Σπονδυλική στένωση: Στένωση του χώρου γύρω από τον νωτιαίο μυελό, που μπορεί να προκαλέσει πόνο και περιορισμό κίνησης.
Η διάγνωση και η θεραπεία των μυοσκελετικών προβλημάτων συνήθως περιλαμβάνουν τη χρήση ιατρικών εξετάσεων όπως ακτινογραφίες ή Μαγνητική Τομογραφία, φυσικοθεραπεία, φάρμακα για τη μείωση του πόνου`,
  },
  // Existing category for Orthopedic issues
  {
    _id: 'cat2',
    _type: 'conditionCategory',
    name: 'Ορθοπεδικά',
    description:
      'Τα ορθοπεδικά προβλήματα εστιάζουν στις παθήσεις και τις κακώσεις του μυοσκελετικού συστήματος, περιλαμβάνοντας θέματα στα οστά, τις αρθρώσεις, τους συνδέσμους, τους μύες και τους τένοντες.',
  },
  // New category for Neurological issues
  {
    _id: 'cat3',
    _type: 'conditionCategory',
    name: 'Νευρολογικά',
    description:
      'Οι νευρολογικές παθήσεις περιλαμβάνουν διαταραχές που επηρεάζουν το νευρικό σύστημα, όπως το εγκεφαλικό επεισόδιο, η νόσος Πάρκινσον και η πολλαπλή σκλήρυνση.',
  },
  // New category for Respiratory issues
  {
    _id: 'cat4',
    _type: 'conditionCategory',
    name: 'Αναπνευστικά',
    description:
      'Αναπνευστικές παθήσεις αναφέρονται σε καταστάσεις που επηρεάζουν τους πνεύμονες και την αναπνευστική ικανότητα, όπως άσθμα και χρόνια αποφρακτική πνευμονοπάθεια (ΧΑΠ).',
  },
  // New category for Sports Injuries
  {
    _id: 'cat5',
    _type: 'conditionCategory',
    name: 'Αθλητικές κακώσεις',
    description:
      'Αθλητικές κακώσεις αναφέρονται σε τραυματισμούς που συμβαίνουν κατά την άσκηση ή κατά τη διάρκεια αθλητικών δραστηριοτήτων, συχνά επηρεάζοντας τους μύες, τις αρθρώσεις και τους τένοντες',
  },
]

const conditions: Condition[] = [
  {
    _id: 'cond1',
    _type: 'condition',
    name: 'Άλγος στον αυχένα',
    description: 'Το Άλγος στον αυχένα, ...',
    categories: [
      {
        _id: 'cat1',
        _type: 'conditionCategory',
        name: 'Μυοσκελετικά',
      },
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
  {
    _id: 'cond1',
    _type: 'condition',
    name: 'Άλγος στον οσφυ',
    description: 'Το Άλγος στον οσφυ, ...',
    categories: [
      {
        _id: 'cat1',
        _type: 'conditionCategory',
        name: 'Μυοσκελετικά',
      },
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
  // Continuing the conditions list
  {
    _id: 'cond3',
    _type: 'condition',
    name: 'Πόνος στα άνω και κάτω άκρα',
    description:
      'Πόνος στα άνω και κάτω άκρα που μπορεί να προκύπτει από διάφορες αιτίες, όπως τραυματισμούς ή χρόνιες παθήσεις.',
    categories: [
      {
        _id: 'cat1',
        _type: 'conditionCategory',
        name: 'Μυοσκελετικά',
      },
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
  {
    _id: 'cond4',
    _type: 'condition',
    name: 'Μετεγχειρητική αποκατάσταση για μείωση πόνου',
    description:
      'Μέθοδοι και προγράμματα αποκατάστασης μετά από χειρουργικές επεμβάσεις για την  μείωση πόνου.',
    categories: [
      {
        _id: 'cat3',
        _type: 'conditionCategory',
        name: 'Νευρολογικά',
      },
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
  {
    _id: 'cond5',
    _type: 'condition',
    name: 'Μετεγχειρητική αποκατάσταση για επαναφορά λειτουργικότητας ',
    description:
      'Μέθοδοι και προγράμματα αποκατάστασης μετά από χειρουργικές επεμβάσεις για την επαναφορά λειτουργικότητας .',
    categories: [
      {
        _id: 'cat3',
        _type: 'conditionCategory',
        name: 'Νευρολογικά',
      },
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
  {
    _id: 'cond6',
    _type: 'condition',
    name: ' Αγγειακό εγκεφαλικό επεισόδιο',
    description: 'Το αγγειακό εγκεφαλικό επεισόδιο ..',
    categories: [
      {
        _id: 'cat3',
        _type: 'conditionCategory',
        name: 'Νευρολογικά',
      },
    ],
  },
  {
    _id: 'cond7',
    _type: 'condition',
    name: ' Παρκινσον',
    description: 'Το Παρκινσον ..',
    categories: [
      {
        _id: 'cat3',
        _type: 'conditionCategory',
        name: 'Νευρολογικά',
      },
    ],
  },
  // Continuing the conditions list
  {
    _id: 'cond8',
    _type: 'condition',
    name: 'Πολλαπλή Σκλήρυνση',
    description:
      'Η Πολλαπλή Σκλήρυνση είναι μια χρόνια αυτοάνοση πάθηση που επηρεάζει το κεντρικό νευρικό σύστημα.',
    categories: [
      {
        _id: 'cat3',
        _type: 'conditionCategory',
        name: 'Νευρολογικά',
      },
    ],
  },
  {
    _id: 'cond9',
    _type: 'condition',
    name: 'Αναπνευστικές παθήσεις',
    description:
      'Οι αναπνευστικές παθήσεις περιλαμβάνουν καταστάσεις όπως το άσθμα και η χρόνια αποφρακτική πνευμονοπάθεια (ΧΑΠ).',
    categories: [
      {
        _id: 'cat4',
        _type: 'conditionCategory',
        name: 'Αναπνευστικά',
      },
    ],
  },
  {
    _id: 'cond10',
    _type: 'condition',
    name: 'Αθλητικές κακώσεις',
    description:
      'Οι αθλητικές κακώσεις συμπεριλαμβάνουν τραυματισμούς που συμβαίνουν κατά τη διάρκεια αθλητικών δραστηριοτήτων, όπως θλάσεις, διαστρέμματα και ρήξεις.',
    categories: [
      {
        _id: 'cat5',
        _type: 'conditionCategory',
        name: 'Αθλητικές κακώσεις',
      },
    ],
  },
  {
    _id: 'cond11',
    _type: 'condition',
    name: 'Ημικρανίες',
    description:
      'Οι ημικρανίες είναι επώδυνοι και συχνά επαναλαμβανόμενοι πονοκέφαλοι που μπορεί να συνοδεύονται από άλλα συμπτώματα όπως ναυτία και ευαισθησία στο φως.',
    categories: [
      {
        _id: 'cat2',
        _type: 'conditionCategory',
        name: 'Ορθοπεδικά',
      },
    ],
  },
]
export async function init() {
  // Add more objects here as needed
  const objectsToAdd = [
    conditionCategories,
    conditions,
    therapyMethods,
    physiotherapist,
  ]
  const client = await getClient()
  objectsToAdd.forEach((object) => {
    client
      .createOrReplace(object)
      .then((res) => {
        console.log(`Document was created, document ID is ${res._id}`)
      })
      .catch((err) => {
        console.error('Upload failed:', err.message)
      })
  })
}

export default { demoPhysio, conditionCategories, conditions }
