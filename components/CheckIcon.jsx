export default function CheckIcon(){
    return(
        <div className="mr-3">
        <svg
          className="w-4 h-4 text-800"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeWidth="2"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            points="6,12 10,16 18,8"
          />
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="11"
            stroke="currentColor"
          />
        </svg>
      </div>
    );
}