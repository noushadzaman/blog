"use client";

import { useEffect, useRef, useState } from "react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { FolderClosed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ModalProps {
  blogId: string;
}

const BookMarkModal: React.FC<ModalProps> = ({ blogId }) => {
  const [createNew, setCreateNew] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);
  const [bookMarks, setBookMarks] = useState<Record<string, string[]>>({});
  const [newFolder, setNewFolder] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks !== null) {
      const object = JSON.parse(storedBookmarks);
      setBookMarks(object);

      Object.keys(object).forEach((key) => {
        const found = object[key]?.find((id: string) => id === blogId);
        console.log(found);
      });
    } else {
      setBookMarks({
        Favorite: [],
      });
    }
  }, [blogId]);

  const handleCheckboxChange = (fName: string, checked: boolean) => {
    setChecks((prevChecks) => {
      if (checked) {
        return [...prevChecks, fName];
      } else {
        return prevChecks.filter((item) => item !== fName);
      }
    });
  };

  const handleAddFolder = () => {
    if (newFolder.length === 0 && inputRef.current) {
      inputRef.current.focus();
      return;
    }

    setBookMarks({
      ...bookMarks,
      [newFolder]: [],
    });
    setCreateNew(false);
  };

  const handleBookMarks = () => {
    const updatedBookMarks = { ...bookMarks };

    Object.keys(updatedBookMarks).forEach((key) => {
      updatedBookMarks[key] = [
        ...updatedBookMarks[key].filter((mark) => mark !== blogId),
      ];
    });

    checks.forEach((check) => {
      if (updatedBookMarks[check]) {
        const exist = updatedBookMarks[check].find((mark) => mark === blogId);
        if (!exist) {
          updatedBookMarks[check] = [...updatedBookMarks[check], blogId];
        }
      }
    });
    setBookMarks(updatedBookMarks);

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookMarks));
  };

  return (
    <DialogContent>
      <DialogTitle className="text-center mb-5">ADD TO BOOKMARK</DialogTitle>
      <div className="space-y-7">
        {createNew ? (
          <>
            <Input
              ref={inputRef}
              onChange={(e) => setNewFolder(e.target.value)}
            />
          </>
        ) : (
          <div>
            {Object.keys(bookMarks).map((fName, index) => (
              <div key={index} className="flex items-center gap-4 text-xl">
                <Checkbox
                  checked={
                    checks.find((c) => c === fName.toString()) ? true : false
                  }
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
        )}
        <div className="flex gap-2">
          <Button onClick={() => setCreateNew(!createNew)} className="w-full">
            {!createNew ? "create new" : "cancel"}
          </Button>
          <Button
            className="w-full"
            onClick={createNew ? handleAddFolder : handleBookMarks}
          >
            {createNew ? "Create" : "Done"}
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default BookMarkModal;
