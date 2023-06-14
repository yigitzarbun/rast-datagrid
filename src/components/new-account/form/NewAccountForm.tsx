import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../../store/hooks";
import { addAccount } from "../../../store/slices/accountsSlice";
import styles from "./NewAccountForm.module.css";
import paths from "../../../routing/Paths";
import { Link, useNavigate } from "react-router-dom";

interface Account {
  link: string;
  name: string;
  description: string;
}

const NewAccountForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Account>({ mode: "onChange" });

  const handleAddAccount: SubmitHandler<Account> = (data: Account) => {
    dispatch(addAccount(data));
    reset();
    navigate(paths.HOME);
  };
  return (
    <form onSubmit={handleSubmit(handleAddAccount)} className={styles.form}>
      <Link to={paths.HOME}>
        <img
          src="/new-account-form/close-round.png"
          alt="close"
          className={styles.closeRound}
        />
      </Link>
      <div className={styles.fieldContainer} style={{ marginTop: "8px" }}>
        <label className={styles.label}>Sosyal Medya Linki</label>
        <input
          type="text"
          {...register("link", {
            required: "Bu alanı doldurmanız gerekmektedir.",
          })}
          className={styles.input}
        />
        {errors.link && <span>{errors.link.message}</span>}
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.label}>Sosyal Medya Adı</label>
        <input
          type="text"
          {...register("name", {
            required: "Bu alanı doldurmanız gerekmektedir.",
          })}
          className={styles.input}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.label}>Açıklama</label>
        <input
          type="text"
          {...register("description", {
            required: "Bu alanı doldurmanız gerekmektedir.",
          })}
          className={styles.input}
        />
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <div className="flex justify-between w-[182.76px] ml-auto mr-[34.24px] mt-[43px] mb-[34.98px]">
        <Link to={paths.HOME}>
          <button type="submit" className={styles.cancelButton}>
            Vazgeç
          </button>
        </Link>
        <button className={styles.saveButton}>Kaydet</button>
      </div>
    </form>
  );
};

export default NewAccountForm;
