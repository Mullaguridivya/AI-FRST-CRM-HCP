import "./InteractionList.css";

function InteractionList() {
  return (
    <div className="interaction-list">

      <h2>Recent HCP Interactions</h2>

      <table>

        <thead>

          <tr>

            <th>Doctor</th>

            <th>Hospital</th>

            <th>Date</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Dr. Sharma</td>

            <td>Apollo Hospital</td>

            <td>08-07-2026</td>

            <td>Interested</td>

            <td>

              <button>Edit</button>

            </td>

          </tr>

          <tr>

            <td>Dr. Priya</td>

            <td>Care Hospital</td>

            <td>07-07-2026</td>

            <td>Follow-up</td>

            <td>

              <button>Edit</button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default InteractionList;