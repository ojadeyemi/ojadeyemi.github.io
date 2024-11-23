const Contacts = () => {
  return (
    <section id="contacts">
      <div className="flex flex-col gap-y-4">
        <span className="text-sm">Contact</span>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row justify-start">
            <div className="w-80 sm:w-96">
              <span className="text-sm text-muted-foreground">LinkedIn</span>
            </div>
            <div className="flex w-full flex-col">
              <a
                href="https://www.linkedin.com/in/oj-adeyemi/"
                className="text-sm hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                OJ Adeyemi
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <div className="w-80 sm:w-96">
              <span className="text-sm text-muted-foreground">Github</span>
            </div>
            <div className="flex w-full flex-col">
              <a
                href="https://github.com/ojadeyemi"
                className="text-sm hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                ojadeyemi
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <div className="w-80 sm:w-96">
              <span className="text-sm text-muted-foreground">Email</span>
            </div>
            <div className="flex w-full flex-col">
              <span className="text-sm">ojieadeyemi@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
