import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Notices</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User ID</th>
          <th className="widgetLgTh">Category ID</th>
          <th className="widgetLgTh">Title</th>
          <th className="widgetLgTh">Date</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">10</span>
          </td>
          <td className="widgetLgDate">2</td>
          <td className="widgetLgAmount">For Developers</td>
          <td className="widgetLgStatus">2 Jun 2021</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">10</span>
          </td>
          <td className="widgetLgDate">5</td>
          <td className="widgetLgAmount">For Govt Issues</td>
          <td className="widgetLgStatus">2 Jun 2021</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">15</span>
          </td>
          <td className="widgetLgDate">3</td>
          <td className="widgetLgAmount">For Govt Issues</td>
          <td className="widgetLgStatus">2 Jun 2021</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">5</span>
          </td>
          <td className="widgetLgDate">3</td>
          <td className="widgetLgAmount">For Developers</td>
          <td className="widgetLgStatus">2 Jun 2021</td>
        </tr>
      </table>
    </div>
  );
}
