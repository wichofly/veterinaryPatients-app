interface PatientDetailItemProps {
  label: string;
  data: string;
}

const PatientDetailItem = ({ label, data }: PatientDetailItemProps) => {
  return (
    <p className="font-semibold mb-3 text-zinc-800 uppercase">
      {label}: <span className="font-normal normal-case">{data}</span>
    </p>
  );
};

export default PatientDetailItem;
