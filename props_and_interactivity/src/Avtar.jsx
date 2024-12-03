
import { getImageUrl } from "./utils";
export default function Avtar({person,size})
{
    return (
        <img
      className="avatar"
      src={ getImageUrl(person) }
      alt={'Photo of ' + person.name}
      width={size}
      height={size}
    />
    );
}