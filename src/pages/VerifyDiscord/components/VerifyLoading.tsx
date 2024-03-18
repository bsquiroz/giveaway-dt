
const VerifyLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 mt-32 md:flex-row md:gap-12">
            <img
                className="w-[80px] block"
                src='/three-dots-spinner.svg'
                alt='spinner'
            />
            <strong className="text-3xl block">Verificando</strong>
        </div>
    )
}

export default VerifyLoading