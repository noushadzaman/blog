import { Checkbox } from "@/components/ui/checkbox";
import { FolderClosed } from "lucide-react";
import { FC } from "react";

interface BookMarkFolderProps {
  bookMarks: Record<string, string[]>;
  checks: string[]; 
  setChecks: React.Dispatch<React.SetStateAction<string[]>>;
}

const BookMarkFolders: FC<BookMarkFolderProps> = ({
  bookMarks,
  checks,
  setChecks,
}) => {
  const handleCheckboxChange = (fName: string, checked: boolean) => {
    setChecks((prevChecks) => {
      if (checked) {
        return [...prevChecks, fName];
      } else {
        return prevChecks.filter((item) => item !== fName);
      }
    });
  };

  return (
    <div>
      {Object.keys(bookMarks).map((fName, index) => (
        <div key={index} className="flex items-center gap-4 text-xl">
          <Checkbox
            checked={checks.find((c) => c === fName.toString()) ? true : false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(fName, Boolean(checked))
            }
          />
          <div className="flex items-center gap-1">
            <FolderClosed />
            <span>{fName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookMarkFolders;
