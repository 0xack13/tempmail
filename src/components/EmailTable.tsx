import React from 'react'
import { useHistory } from 'react-router-dom'
import { Mailbox } from '../types'

const EmailTable: React.FC<{ list: Mailbox[] }> = ({ list }) => {
  const history = useHistory()

  const redirect = (url: string) => {
    history.push(url);
  }

  return (
    <React.Fragment>
      <table className="mt-4 table table-dark">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">Subject</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {(list.length > 0) && list.map((val) => (
            <tr key={val.id} onClick={() => redirect(`/inbox?id=${val.id}`)} className="email-row">
              <td>{val.from}</td>
              <td>{val.subject}</td>
              <td>{val.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {(list.length === 0) && <h3 className="mt-4 text-white text-center">Inbox is Empty!</h3>}
    </React.Fragment>
  )
}

export default EmailTable
