import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";

function Table({data}) {
  return (
    <div>
      <TableHeader data={data} />
      {data.map((referral) => {
        return (
          <TableRow key={referral.id} referral={referral}/>
        )
      })}
    </div>
  )
}


export { Table };
