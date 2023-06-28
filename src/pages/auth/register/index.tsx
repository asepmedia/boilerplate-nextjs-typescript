import Button from '@/components/atoms/Button';
import { InputText } from '@/components/molecules';
import OutsideWrapper from '@/components/molecules/Wrapper/OutsideWrapper';
import Layout from '@/components/organism/Layout';

export default function AuthRegisterPage() {
  return (
    <>
      <Layout>
        <div className="flex w-full h-screen items-center justify-center bg-slate-50">
          <div className="bg-white border rounded-lg p-5 w-[450px]">
            <div>
              <h3 className="text-3xl font-bold text-center">Login</h3>
            </div>
            <div className="my-10"></div>
            <div className="mb-5">
              <OutsideWrapper
                onClickOutside={(e) => {
                  console.log(e, 'sds');
                }}
              >
                <InputText
                  fieldName="name"
                  placeholder="email@example.com"
                  labelText={'Email or Username'}
                  isRequired
                />
              </OutsideWrapper>
            </div>
            <div className="mb-5">
              <InputText
                fieldName="password"
                type="password"
                placeholder="********"
                labelText={'Password'}
                isRequired
                errors={{
                  password: {
                    message: 'Password is required',
                  },
                }}
              />
            </div>
            <div className="mb-5">
              <Button>Test</Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
