import { v4 as uuidv4 } from 'uuid';

import { Table } from './components/Table'

import './assets/style.scss'


const referrals = [
  {
    id: uuidv4(),
    referralEvent: {
      action: 'Purchase',
      date: '06/17/2020 at 7:13 PM PDT',
      price: '$120.00',
    },
    advocate: {
      emailAdvocate: 'autouser23926@gmail.com',
      role: 'Advocate',
    },
    friend: {
      emailFriend: 'fr58272@gmail.com',
      roleFriend: 'Friend',
    },
    referralStatus: {
      nameStatus: 'Pending',
      status: true
    }
  },
  {
    id: uuidv4(),
    referralEvent: {
      action: 'Purchase',
      date: '07/10/2020 at 4:05 PM PDT',
      price: '$100.00',
    },
    advocate: {
      emailAdvocate: 'autouser23926@gmail.com',
      role: 'Advocate',
    },
    friend: {
      emailFriend: 'fr58272@gmail.com',
      roleFriend: 'Friend',
    },
    referralStatus: {
      nameStatus: 'Flagged',
      status: false
    }
  },
  {
    id: uuidv4(),
    referralEvent: {
      action: 'Purchase',
      date: '06/09/2020 at 12:42 PM PDT',
      price: '$28.00',
    },
    advocate: {
      emailAdvocate: 'autouser23926@gmail.com',
      role: 'Advocate',
    },
    friend: {
      emailFriend: 'fr58272@gmail.com',
      roleFriend: 'Friend',
    },
    referralStatus: {
      nameStatus: 'Approved',
      status: true
    }
  },
  {
    id: uuidv4(),
    referralEvent: {
      action: 'Purchase',
      date: '08/07/2020 at 4:20 PM PDT',
      price: '$100.00',
    },
    advocate: {
      emailAdvocate: 'autouser23926@gmail.com',
      role: 'Advocate',
    },
    friend: {
      emailFriend: 'fr58272@gmail.com',
      roleFriend: 'Friend',
    },
    referralStatus: {
      nameStatus: 'Blocked',
      status: false
    }
  },
  {
    id: uuidv4(),
    referralEvent: {
      action: 'Purchase',
      date: '06/09/2020 at 2:08 PM PDT',
      price: '$100.00',
    },
    advocate: {
      emailAdvocate: 'autouser23926@gmail.com',
      role: 'Advocate',
    },
    friend: {
      emailFriend: 'fr58272@gmail.com',
      roleFriend: 'Friend',
    },
    referralStatus: {
      nameStatus: 'Voided',
      status: false
    }
  },
]

function App() {
  return (
    <div className='container'>
      <Table data={referrals}/>
    </div>
  )
}

export default App
