import { CardCollapsible, InputText } from '@/components/molecules';
import Layout from '@/components/organism/Layout';
import useOutsideAlerter from '@/hooks/useOutsideAlerter';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Tasklist Overview',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Open',
      data: labels.map((data, index: any) => 15 * (index < 1 ? 1 : index)),
      backgroundColor: '#1B6B93',
    },
    {
      label: 'On Progress',
      data: labels.map((data, index: any) => 10 * (index < 1 ? 1 : index)),
      backgroundColor: '#FFB140',
    },
    {
      label: 'Closed',
      data: labels.map((data, index: any) => 20 * (index < 1 ? 1 : index)),
      backgroundColor: '#EF3054',
    },
  ],
};

export default function AuthSignInPage() {
  const [showAction, setShowAction] = useState<boolean>(false);

  const toggleShowAction = () => {
    setShowAction((prev) => !prev);
  };

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, (e: any) => {
    if (showAction) {
      setShowAction((prev) => !prev);
    }
  });

  return (
    <>
      <Layout>
        <div className="flex w-full h-screen bg-slate-50 pt-5">
          <div className={'flex container mx-auto px-4'}>
            <div className={'w-full grid lg:grid-cols-4 gap-2 lg:gap-x-5'}>
              <div className="lg:col-span-3">
                <div className="mb-5">
                  <Bar options={options} data={data} />
                </div>
                <div className="mb-5">
                  <CardCollapsible title={'Open Tasklist'} initial={'open'}>
                    <div className="relative" ref={wrapperRef}>
                      <button type="button" onClick={toggleShowAction}>
                        sds
                      </button>
                      {showAction && (
                        <div className="absolute -top-3 -right-[80px] bg-white border rounded-lg p-3">
                          Edit
                        </div>
                      )}
                    </div>
                  </CardCollapsible>
                </div>
                <div className="mb-5">
                  <CardCollapsible
                    title={'On Progress Tasklist'}
                    initial={'open'}
                    headerClassName="!bg-warning active:!bg-warning/90 hover:!bg-warning/95"
                  >
                    <div>
                      <div className="mb-5">
                        <InputText
                          fieldName="name"
                          placeholder="email@example.com"
                          labelText={'Email or Username'}
                          isRequired
                        />
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
                    </div>
                  </CardCollapsible>
                </div>
                <div className="mb-5">
                  <CardCollapsible
                    title={'Closed'}
                    initial={'open'}
                    headerClassName="!bg-danger active:!bg-danger/90 hover:!bg-danger/95"
                  >
                    <div>
                      <div className="mb-5">
                        <InputText
                          fieldName="name"
                          placeholder="email@example.com"
                          labelText={'Email or Username'}
                          isRequired
                        />
                      </div>
                      <div className="mb-5">
                        <InputText
                          fieldName="password"
                          type="password"
                          placeholder="********"
                          labelText={'Password'}
                          isRequired
                        />
                      </div>
                    </div>
                  </CardCollapsible>
                </div>
              </div>
              <div className="max-lg:order-first">
                <div className="bg-white border rounded-lg p-5"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
