export interface IFormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode
}

const Form = ({ children, ...props }: IFormProps) => {
  return <form {...props}>{children}</form>
}
export default Form
